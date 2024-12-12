import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Text strings must be rendered within a <Text> component.']);
LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop.']);

// MyTrip.jsx

import { Alert } from 'react-native'; // Import Alert for user confirmations
import { View, Text, ActivityIndicator, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { writeBatch, doc, collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from './../../configs/FirebaseConfig';
import UserTripList from '../../components/MyTrips/UserTripList';
import { useRouter } from 'expo-router';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
    
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  const router = useRouter();


    // fetching data
    // MyTrip.jsx

  // MyTrip.jsx

const handleClearTrips = async () => {
  if (userTrips.length === 0) return;

  // Confirm with the user before deleting
  Alert.alert(
    "Confirm Deletion",
    "Are you sure you want to delete all your trips? This action cannot be undone.",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: deleteAllTrips,
      },
    ]
  );
};

// MyTrip.jsx

const deleteAllTrips = async () => {
  setLoading(true);

  try {
    // Create a batch to delete multiple documents
    const batch = writeBatch(db);

    userTrips.forEach((trip) => {
      const tripRef = doc(db, "UserTrips", trip.id);
      batch.delete(tripRef);
    });

    // Commit the batch
    await batch.commit();

    // Clear the userTrips state
    setUserTrips([]);
    Alert.alert("Success", "All trips have been deleted successfully.");
  } catch (error) {
    console.error("Error deleting trips:", error);
    Alert.alert("Error", "There was an error deleting your trips. Please try again.");
  }

  setLoading(false);
};


  const getMyTrips = async () => {
    setLoading(true);

    // Clear the state to prevent duplicate entries
    setUserTrips([]);

    const q = query(collection(db, "UserTrips"), where("userEmail", "==", user.email));

    try {
      const querySnapshot = await getDocs(q);

      const trips = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Store the document ID
        ...doc.data(),
      }));

      setUserTrips(trips);
    } catch (error) {
      console.error("Error fetching user trips:", error);
    }

    setLoading(false);
  };

    
  
    useEffect(() => {
      user&&getMyTrips();
    }, [user])


    return (
      <ScrollView
        style={{
          padding: 25,
          paddingTop: 55,
          backgroundColor: Colors.WHITE,
          height: '100%',
        }}
      >
        {/* Header */}
        <View
          style={{
            marginTop: '6%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontFamily: 'roboto-bold',
            }}
          >
            My Trips
          </Text>
    
          <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
            <Ionicons name="add-circle" size={48} color="black" />
          </TouchableOpacity>
        </View>
    
        {/* Loading Indicator */}
        {loading && <ActivityIndicator size={'large'} color={Colors.PRIMARY} />}
    
        {/* No Trips or Trip List */}
        {userTrips?.length === 0 ? (
          <StartNewTripCard />
        ) : (
          <>
            <UserTripList userTrips={userTrips} />
            {/* Clear Trips Button */}
            <TouchableOpacity
              onPress={handleClearTrips}
              style={{
                backgroundColor: Colors.WHITE,
                padding: 15,
                borderRadius: 15,
                marginTop: 20,
                alignItems: 'center',
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  color: Colors.BLACK,
                  fontFamily: 'roboto-medium',
                  fontSize: 16,
                }}
              >
                Clear All Trips
              </Text>
            </TouchableOpacity>
          </>
        )}
    
        {/* Remove unnecessary console.log from JSX */}
        {/* {console.log(userTrips)} */}
      </ScrollView>
    );
}
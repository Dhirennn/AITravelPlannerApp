import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from './../../configs/FirebaseConfig';
import UserTripList from '../../components/MyTrips/UserTripList';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
    
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;


    // fetching data
    const getMyTrips = async() => {
      setLoading(true);
  
      // clear the state
      // otherwise it will keep adding the same data
      setUserTrips([]);
  
      const q = query(collection(db, "UserTrips"), where("userEmail", "==", user.email));
  
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUserTrips(prev => [...prev, doc.data()]);
      });
  
      setLoading(false);
  
    }
    
  
    useEffect(() => {
      user&&getMyTrips();
    }, [user])


  return (
    <ScrollView style={{
      padding:25,
      paddingTop:55,
      backgroundColor: Colors.WHITE,
      height:'100%'


    }}>
      <View
      style={{
        marginTop: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}

      >

      <Text style={{
        fontSize: 35,
        fontFamily: 'roboto-bold'


      }}>
        My Trips
      </Text>
      <Ionicons name="add-circle" size={48} color="black" />

      </View>

      
      {loading&&<ActivityIndicator size={'large'} color={Colors.PRIMARY}></ActivityIndicator>}
      {userTrips?.length == 0 ? <StartNewTripCard /> : 
        <UserTripList userTrips={userTrips}>

        </UserTripList>}

      {console.log(userTrips)}

      
      
    </ScrollView>
  )
}
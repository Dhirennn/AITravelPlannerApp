import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();

  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });

    if (trip) {
      try {
        const parsedTrip = JSON.parse(trip); // Parse the main trip object
        const parsedTripData = JSON.parse(parsedTrip.tripData); // Parse the tripData JSON string
        setTripDetails({ ...parsedTrip, tripData: parsedTripData }); // Merge parsed tripData into the main object
        console.log('Parsed Trip Details:', { ...parsedTrip, tripData: parsedTripData });
      } catch (error) {
        console.error('Error parsing trip or tripData:', error);
      }
    }
  }, [trip]);

  return tripDetails && (
    <View>
      {/* Image Section */}
      {tripDetails.tripData.locationInfo.photoRef ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
              tripDetails.tripData.locationInfo.photoRef +
              '&key=' +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
          style={{
            marginTop: 0,
            width: '100%',
            height: 330,
            borderRadius: 15,
          }}
        />
      ) : (
        <Text>Loading trip details or photo not available</Text>
      )}

      {/* Details Section */}
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          height: '100%',
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        {/* Location Name */}
        <Text
          style={{
            fontFamily: 'roboto-bold',
            fontSize: 28,
            color: Colors.PRIMARY,
          }}
        >
          {tripDetails.tripData.locationInfo.name}
        </Text>

        {/* Trip Start and End Dates */}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 6,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'roboto',
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            {moment(tripDetails.tripData.startDate).format('DD MMM YYYY')}
          </Text>

          <Text
            style={{
              fontFamily: 'roboto',
              fontSize: 18,
              color: Colors.GRAY,
            }}
          >
            - {moment(tripDetails.tripData.endDate).format('DD MMM YYYY')}
          </Text>
        
        </View>

        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY,
            marginTop: 10
          }}
        >
          🚌 {tripDetails.tripData.traveler.title}
        </Text>

      </View>
    </View>
  );
}

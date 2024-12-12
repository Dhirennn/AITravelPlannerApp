import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';

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

    // console.log('Raw trip parameter:', trip);

    if (trip) {
      try {
        const parsedTrip = JSON.parse(trip); // Parse the main trip object
        const parsedTripData = JSON.parse(parsedTrip.tripData); // Parse the tripData JSON string

        // Merge parsedTripData into parsedTrip and set to tripDetails
        setTripDetails({ ...parsedTrip, tripData: parsedTripData });

        console.log("Parsed trip LOL:" + JSON.stringify(parsedTrip));

      } catch (error) {
        console.error('Error parsing trip or tripData:', error);
      }
    }
  }, [trip]);

  return tripDetails && (
    <ScrollView>
      {/* Image Section */}
      {tripDetails.tripData?.locationInfo?.photoRef ? (
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
          {tripDetails.tripData?.locationInfo?.name || 'Location not available'}
        </Text>

        {/* Trip Start and End Dates */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
            {tripDetails.tripData?.startDate
              ? moment(tripDetails.tripData.startDate).format('DD MMM YYYY')
              : 'Start date not available'}
          </Text>

          <Text
            style={{
              fontFamily: 'roboto',
              fontSize: 18,
              color: Colors.GRAY,
              marginLeft: 6,
            }}
          >
            - {tripDetails.tripData?.endDate
              ? moment(tripDetails.tripData.endDate).format('DD MMM YYYY')
              : 'End date not available'}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'outfit',
            fontSize: 18,
            color: Colors.GRAY,
            marginTop: 10,
          }}
        >
          🚌 {tripDetails.tripData?.traveler?.title || 'Traveler info not available'}
        </Text>

        {/* Flight Info */}
        <FlightInfo 
          flightData={tripDetails?.tripPlan?.flight?.exampleFlight || null}
        />


        {/* Hotels List */}
        <HotelList hotelList={tripDetails?.tripPlan?.hotelOptions}></HotelList>

        {/* Trip Day Planner Info */}
        <PlannedTrip details={tripDetails?.tripPlan?.dailyItinerary}></PlannedTrip>

      </View>
    </ScrollView>
  );
}

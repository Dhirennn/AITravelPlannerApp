// UserTripCard.jsx
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import moment from 'moment';
import Constants from 'expo-constants';
import { getPhotoRef } from '../../services/GooglePlaceAPI';

export default function UserTripCard({ userTrip }) {
  const router = useRouter();
  const [photoRef, setPhotoRef] = useState(null);

  // Access the Google Maps API Key from environment variables
  const GOOGLE_MAPS_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;

  useEffect(() => {
    const fetchPhotoRef = async () => {
      try {
        const tripData = JSON.parse(userTrip.tripData);
        const result = await getPhotoRef(tripData.locationInfo?.name || tripData.locationInfo?.placeName);
        const ref = result?.results?.[0]?.photos?.[0]?.photo_reference;
        if (ref) {
          setPhotoRef(ref);
        } else {
          console.log(`No photo reference found for ${tripData.locationInfo?.name}`);
        }
      } catch (error) {
        console.error('Error fetching photo reference:', error);
      }
    };

    fetchPhotoRef();
  }, [userTrip]);

  // Construct the Image URI
  const imageUri = photoRef
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${GOOGLE_MAPS_API_KEY}`
    : 'https://via.placeholder.com/400'; // Fallback image

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/trip-details',
          params: { trip: JSON.stringify(userTrip) },
        })
      }
      style={{
        marginTop: '6%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      }}
    >
      {/* Hotel Image */}
      <Image
        source={{
          uri: imageUri,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
        }}
        onError={(e) =>
          console.error(`Image failed to load for ${userTrip.hotelName}:`, e.nativeEvent.error)
        }
      />

      {/* Trip Details */}
      <View style={{ gap: 4 }}>
        <Text
          style={{
            fontFamily: 'roboto-medium',
            fontSize: 20,
          }}
        >
          {JSON.parse(userTrip.tripData).locationInfo?.name || 'Location Name'}
        </Text>
        <Text
          style={{
            fontFamily: 'roboto',
            fontSize: 16,
            color: Colors.GRAY,
          }}
        >
          {JSON.parse(userTrip.tripData).startDate
            ? moment(JSON.parse(userTrip.tripData).startDate).format('DD MMM YYYY')
            : 'Start Date'}
        </Text>
        <Text
          style={{
            fontFamily: 'roboto',
            fontSize: 16,
            color: Colors.GRAY,
          }}
        >
          Travelling: {JSON.parse(userTrip.tripData).traveler?.title || 'Traveler'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

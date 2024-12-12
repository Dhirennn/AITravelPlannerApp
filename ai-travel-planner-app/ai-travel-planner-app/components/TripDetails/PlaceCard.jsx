import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getPhotoRef } from '../../services/GooglePlaceAPI';
import Constants from 'expo-constants';

export default function PlaceCard({ dayDetails, index }) {
  // Initialize an object to store photoRefs for each place
  const [photoRefs, setPhotoRefs] = useState({});

  // Access the Google Maps API Key from Expo constants
  const GOOGLE_MAPS_API_KEY = Constants.expoConfig.extra.googleMapsApiKey;

  useEffect(() => {
    getGooglePhotoRefs();
  }, []);

  const getGooglePhotoRefs = async () => {
    const activities = dayDetails.activities;
    const refs = {};

    // Iterate through each activity and its places to fetch photoRefs
    for (let activityIndex = 0; activityIndex < activities.length; activityIndex++) {
      const activity = activities[activityIndex];
      if (activity.placesToVisit && activity.placesToVisit.length > 0) {
        for (let placeIndex = 0; placeIndex < activity.placesToVisit.length; placeIndex++) {
          const place = activity.placesToVisit[placeIndex];
          const result = await getPhotoRef(place.placeName);
          console.log(`HELLO ${JSON.stringify(result, null, 2)}`); // For debugging

          const photoReference = result?.results?.[0]?.photos?.[0]?.photo_reference;
          console.log(`FUCK_MY_LIFE ${photoReference}`); // For debugging

          if (photoReference) {
            // Use a unique key for each photoRef, e.g., `${activityIndex}-${placeIndex}`
            refs[`${activityIndex}-${placeIndex}`] = photoReference;
          } else {
            console.log(`No photo reference found for ${place.placeName}`);
          }
        }
      }
    }

    setPhotoRefs(refs);
  };

  return (
    <View key={index} style={{ marginBottom: 20 }}>
      {/* Day Header */}
      <Text
        style={{
          fontFamily: 'roboto-bold',
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        DAY {dayDetails.day}{"\n\n"}{dayDetails.theme}
      </Text>

      {/* Activities */}
      {dayDetails.activities.map((activity, activityIndex) => {
        const hasPlaces = activity.placesToVisit && activity.placesToVisit.length > 0;
        return (
          <View
            key={activityIndex} // Ideally, use a unique identifier here if available
            style={{
              marginBottom: 15,
              ...(hasPlaces
                ? {
                    padding: 5,
                    borderRadius: 15,
                    backgroundColor: Colors.LIGHT_BLUE,
                  }
                : {}),
            }}
          >
            {activity.placesToVisit?.map((place, placeIndex) => {
              const uniqueKey = `${activityIndex}-${placeIndex}`;
              const currentPhotoRef = photoRefs[uniqueKey];
              const imageUri = currentPhotoRef
                ? 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
                +currentPhotoRef
                +'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
                : 'https://via.placeholder.com/400'; // Fallback image

              console.log("similj", currentPhotoRef); // For debugging

              return (
                <View key={uniqueKey} style={{ marginBottom: 15 }}>
                  {/* Image */}
                  <Image
                    source={{
                      uri: imageUri,
                    }}
                    style={{
                      width: '100%',
                      height: 150,
                      borderRadius: 10,
                      marginBottom: 5,
                    }}
                    onError={(e) => console.error(`Image failed to load for ${place.placeName}:`, e.nativeEvent.error)}
                  />

                  {/* Place Name */}
                  <Text
                    style={{
                      fontFamily: 'roboto-bold',
                      fontSize: 20,
                      marginBottom: 2,
                    }}
                  >
                    {place.placeName}
                  </Text>

                  {/* Place Details */}
                  <Text
                    style={{
                      fontFamily: 'roboto',
                      fontSize: 16,
                      color: Colors.GRAY,
                      marginBottom: 5,
                    }}
                  >
                    {place.placeDetails}
                  </Text>

                  {/* Ticket Price and Travel Time */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {/* Text Container */}
                    <View style={{ flex: 1, marginRight: 10 }}>
                      <Text
                        style={{
                          fontFamily: 'roboto',
                          fontSize: 16,
                          color: Colors.PRIMARY,
                          marginTop: 5,
                          flexWrap: 'wrap',
                        }}
                      >
                        🎟️ Ticket Price: <Text style={{ fontFamily: 'roboto-bold', color: Colors.PRIMARY }}>{place.ticketPrice}</Text>
                      </Text>

                      <Text
                        style={{
                          fontFamily: 'roboto',
                          fontSize: 16,
                          color: Colors.PRIMARY,
                          marginTop: 5,
                          flexWrap: 'wrap',
                        }}
                      >
                        ⏱️ Time to Travel: <Text style={{ fontFamily: 'roboto-bold', color: Colors.PRIMARY }}>{place.travelTimeFromHotel}</Text>
                      </Text>
                    </View>

                    {/* Navigation Icon */}
                    <TouchableOpacity
                      style={{
                        backgroundColor: Colors.PRIMARY,
                        padding: 5,
                        borderRadius: 7,
                      }}
                    >
                      <Ionicons name="navigate" size={30} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PlannedTrip({ details }) {
  if (!Array.isArray(details)) {
    return (
      <View style={{ marginTop: 20, padding: 15 }}>
        <Text
          style={{
            fontFamily: 'roboto-bold',
            fontSize: 20,
          }}
        >
          🏕️ Plan Details
        </Text>
        <Text
          style={{
            fontFamily: 'roboto',
            fontSize: 16,
            color: '#666',
            marginTop: 10,
          }}
        >
          No itinerary available.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20, padding: 15 }}>
      <Text
        style={{
          fontFamily: 'roboto-bold',
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        🏕️ Plan Details
      </Text>

      {details.map((dayDetails, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          {/* Day Header */}
          <Text
            style={{
              fontFamily: 'roboto-bold',
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            DAY {dayDetails.day}{":\n"}{dayDetails.theme}
          </Text>

          {/* Activities */}
          {dayDetails.activities.map((activity, activityIndex) => {
            const hasPlaces = activity.placesToVisit && activity.placesToVisit.length > 0;
            return (
              <View
                key={activityIndex}
                style={{
                  marginBottom: 15,
                  ...(hasPlaces
                    ? {
                        padding: 5,
                        borderRadius: 15,
                        backgroundColor: Colors.LIGHT_BLUE
                      }
                    : {}),
                }}
              >
                {activity.placesToVisit?.map((place, placeIndex) => (
                  <View key={placeIndex} style={{ marginBottom: 15 }}>
                    {/* Placeholder image if none provided */}
                    <Image
                      source={require('./../../assets/images/login.jpeg')} // change this to your placeholder image
                      style={{
                        width: '100%',
                        height: 150,
                        borderRadius: 10,
                        marginBottom: 5,
                      }}
                    />

                    <Text
                      style={{
                        fontFamily: 'roboto-bold',
                        fontSize: 20,
                        marginBottom: 2,
                      }}
                    >
                      {place.placeName}
                    </Text>

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

                    <View
                      style={{
                        display: 'flex',
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
                            flexWrap: 'wrap'
                          }}
                        >
                          🎟️ Ticket Price: <Text style={{fontFamily:'roboto-bold', color: Colors.PRIMARY}}>{place.ticketPrice}</Text>
                        </Text>
                        
                        <Text
                          style={{
                            fontFamily: 'roboto',
                            fontSize: 16,
                            color: Colors.PRIMARY,
                            marginTop: 5,
                            flexWrap: 'wrap'
                          }}
                        >
                          ⏱️ Time to Travel: <Text style={{fontFamily:'roboto-bold', color: Colors.PRIMARY}}>{place.travelTimeFromHotel}</Text>
                        </Text>
                      </View>
                      
                      <TouchableOpacity
                        style={{
                          backgroundColor: Colors.PRIMARY,
                          padding: 5,
                          borderRadius: 7
                        }}
                      >
                        <Ionicons name="navigate" size={30} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}

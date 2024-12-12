import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import PlaceCard from './PlaceCard';

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
        <PlaceCard dayDetails={dayDetails} index={index}></PlaceCard>
      ))}
    </View>
  );
}

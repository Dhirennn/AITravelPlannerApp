import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightData}) {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1
      }}
    >
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
    <Text
      style={{
        fontFamily: 'roboto-bold',
        fontSize: 20,
      }}
    >✈️ Flights
    </Text>

    <TouchableOpacity
    style={{
      backgroundColor: Colors.PRIMARY,
      padding: 10,
      width: 100,
      borderRadius: 10,
      marginTop: 8,
    }}
  
  >
    <Text
      style={{
        textAlign: 'center',
        color: Colors.WHITE,
        fontFamily: 'roboto-medium',
        fontSize: 15,
      }}
    
    >Book Here</Text>
  </TouchableOpacity>
    
    </View>
    
      <Text
        style={{
          fontFamily: 'roboto',
          fontSize: 18,
          color: Colors.PRIMARY,
          marginTop: 10,
        }}
      >Airline: Delta</Text>
      <Text
        style={{
          fontFamily: 'roboto',
          fontSize: 18,
          color: Colors.PRIMARY,
          marginTop: 6,
        }}
      >Price: {flightData.flight_price_per_person}</Text>

    </View>
  )
}
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState();


  return (
    <View style={{
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

      {userTrips?.length == undefined ? <StartNewTripCard /> : <Text>Trips</Text>}

      {console.log(userTrips)}

      
      
    </View>
  )
}
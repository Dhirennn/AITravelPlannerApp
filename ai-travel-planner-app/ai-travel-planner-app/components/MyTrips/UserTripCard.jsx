import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router';
import moment from 'moment';

export default function UserTripCard({userTrip}) {


  const formatData=(data)=>{
    return JSON.parse(data);
  }

  const router = useRouter();

  return (
    <View
      style={{
        marginTop: '6%',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      }}
    >
      <Image source={require('./../../assets/images/login.jpeg')}
      style={{
        width: 100,
        height: 100,
        borderRadius: 15,
      }}
      >
      </Image>
      
      <View
        style={{gap:4}}
      >
      <Text style={{
        fontFamily: 'roboto-medium',
        fontSize: 20,
      }}>{formatData(userTrip.tripData).locationInfo.name}</Text>
      <Text
        style={{
          fontFamily: 'roboto',
          fontSize: 16,
          color: Colors.GRAY,
        }}
      >{moment(formatData(userTrip.tripData)).format('DD MMM YYYY')}</Text>
      <Text style={{
        fontFamily: 'roboto',
        fontSize: 16,
        color: Colors.GRAY
      }}>Travelling: {formatData(userTrip.tripData).traveler.title}</Text>
 
      </View>
      </View>
  )
}
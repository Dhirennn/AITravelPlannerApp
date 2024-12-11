import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import {CreateTripContext} from './../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {

  const navigation = useNavigation();

  const {tripData, setTripData} = useContext(CreateTripContext)

  const router = useRouter();


  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Review Trip',
    })
  }, [])

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
        height: '100%',

      }}
    >
      <Text
        style={{
          fontFamily: 'roboto-bold',
          fontSize: 36,
          color: Colors.PRIMARY,
          marginTop: '5%'
        }}
      >
        Review your trip
      </Text>

        <View>
          <Text
            style={{
              fontFamily: 'roboto-bold',
              fontSize: 18,
              marginTop: 20,
              marginBottom: 20,
            }}
          >Before generating your trip, please review your selection</Text>
        </View>


        {/* Destination Info*/}

        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            display: 'flex',
            gap: 20
          }}

        >
        {/* <Ionicons name="location-sharp" size={40} color="black" /> */}

        <Text
          style={{
            fontSize: 40
          }}
        >📍</Text>


        <View>
          <Text
            style={{
              fontFamily: 'roboto-bold',
              fontSize: 18,
              marginBottom: 10,
              color: Colors.GRAY
              }}
            >Destination
          </Text>
          
          
          <Text
          style={{
            fontFamily: 'roboto-medium',
            fontSize: 16,
            color: Colors.PRIMARY
          }}
          
          >
          {tripData?.locationInfo?.name}
          </Text>

          </View>
        </View>







        {/* Travel Dates */}

        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            display: 'flex',
            gap: 20
          }}

        >
        {/* <Ionicons name="location-sharp" size={40} color="black" /> */}

        <Text
          style={{
            fontSize: 40
          }}
        >📅</Text>


        <View>
          <Text
            style={{
              fontFamily: 'roboto-bold',
              fontSize: 18,
              marginBottom: 10,
              color: Colors.GRAY
              }}
            >Travel Dates
          </Text>
          
          
          <Text
          style={{
            fontFamily: 'roboto-medium',
            fontSize: 16,
            color: Colors.PRIMARY
          }}
          
          >
          {moment(tripData?.startDate).format('MMM DD, YYYY')} - {moment(tripData?.endDate).format('MMM DD, YYYY')}
          {"\n"}

          {"totalNoOfDays" in tripData ?`(${tripData.totalNoOfDays} days, ${tripData.totalNoOfDays-1} nights)` : ''}
          </Text>

          </View>
        </View>



      {/* Traveler Info */}
        
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            display: 'flex',
            gap: 20
          }}

        >
        {/* <Ionicons name="location-sharp" size={40} color="black" /> */}

        <Text
          style={{
            fontSize: 40
          }}
        >👯</Text>


        <View>
          <Text
            style={{
              fontFamily: 'roboto-bold',
              fontSize: 18,
              marginBottom: 10,
              color: Colors.GRAY
              }}
            >Who is Travelling?
          </Text>
          
          
          <Text
          style={{
            fontFamily: 'roboto-medium',
            fontSize: 16,
            color: Colors.PRIMARY
          }}
          
          >
          {tripData?.traveler?.title}
          </Text>

          </View>
        </View>



        {/* Budget Info */}
        
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            display: 'flex',
            gap: 20
          }}

        >
        {/* <Ionicons name="location-sharp" size={40} color="black" /> */}

        <Text
          style={{
            fontSize: 40
          }}
        >💰</Text>


        <View>
          <Text
            style={{
              fontFamily: 'roboto-bold',
              fontSize: 18,
              marginBottom: 10,
              color: Colors.GRAY
              }}
            >Budget
          </Text>
          
          
          <Text
          style={{
            fontFamily: 'roboto-medium',
            fontSize: 16,
            color: Colors.PRIMARY
          }}
          
          >
          {tripData?.budget}
          </Text>

          </View>
        </View>

      <TouchableOpacity
      onPress={() => {
        router.replace('/create-trip/generate-trip');
      }}
      style={{
          backgroundColor: Colors.PRIMARY,
          padding: 20,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 80,
      }}
      >
      <Text
          style={{
            color: Colors.WHITE,
            fontFamily: 'roboto-medium',
            fontSize: 20
          }}
      >Build My Trip</Text>
  
  </TouchableOpacity>


    </View>
  )
}
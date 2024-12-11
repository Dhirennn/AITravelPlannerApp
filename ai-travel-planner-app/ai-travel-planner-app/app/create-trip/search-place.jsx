import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../constants/Colors';
import 'react-native-get-random-values';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext'




export default function SearchPlace() {

  const navigation = useNavigation();

  const {tripData, setTripData} = useContext(CreateTripContext)

  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    })


  }, [])


  // Executes when tripData changes
  useEffect(() => {
    console.log(tripData);
  }, [tripData])


  return (
    <View
      style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
        height: '100%'


      }}
    
    >

    
    <GooglePlacesAutocomplete

    styles={{
      textInputContainer: {
       borderWidth: 1,
       borderRadius:5,
       marginTop: 25,
      }
    }}

    placeholder='Search'
    fetchDetails={true}
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      // console.log(data.description);
      // console.log(details?.geometry.location);
      // console.log(details?.photos[0].photo_reference);
      // console.log(details?.url);

      setTripData({
        locationInfo: {
          name: data.description,
          coordinates: details?.geometry.location,
          photoRef: details?.photos[0].photo_reference,
          url: details?.url
        }
      });

      
      // route it to new page (select-traveler page)
      router.push('/create-trip/select-traveler');


    }}
    query={{
      key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
      language: 'en',
    }}


  />

  
    </View>
  )
}


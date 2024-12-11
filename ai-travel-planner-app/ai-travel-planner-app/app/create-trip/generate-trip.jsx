import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';

export default function GenerateTrip() {

  const {tripData, setTripData} = useContext(CreateTripContext);

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
          marginTop: '5%',
          textAlign: 'center',
        }}
      >
        Please Wait...
      </Text>

      <Text
        style={{
          fontFamily: 'roboto-medium',
          fontSize: 20,
          color: Colors.PRIMARY,
          marginTop: '15%',
          textAlign: 'center',
        }}
      >
        We are generating your dream trip! Woohoo!
      </Text>

      {/* Corrected Image component */}
      <Image
        source={require('./../../assets/images/plane.gif')}
        style={{
          width: 200,
          height: 200,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />

      <Text
        style={{
          fontFamily: 'roboto',
          fontSize: 20,
          color: Colors.GRAY,
          marginTop: '10%',
          textAlign: 'center',
        }}
      
      >Do not go back</Text>
    </View>
  );
}

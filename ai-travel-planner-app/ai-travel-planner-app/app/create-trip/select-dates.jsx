import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';

export default function SelectDates() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            
        })

    }, [])

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
        height: '100%',
        marginTop: 20,
    }}
    
    >
      <Text
        style={{
          fontFamily:'roboto-bold',
          fontSize: 36,

        }}
      
      >Travel Dates</Text>
    </View>
  )
}

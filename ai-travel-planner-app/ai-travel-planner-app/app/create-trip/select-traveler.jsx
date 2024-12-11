import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';

export default function SelectTraveler() {

    // Options List




    // back button
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })

    }, [])

  return (
    <View style={{
        padding: 25,
        paddingTop: 90,
        backgroundColor: Colors.WHITE,
        height: '100%',
        marginTop: 20,
    }}>
      <Text
        style={{
            fontFamily:'roboto-bold',
            fontSize: 36,
            color: Colors.PRIMARY,
        }}
      
      >Who's Travelling?</Text>
    
    <View
    
    style={{
        marginTop: 20
    }}
    >
        
        <Text
        style={{
            fontFamily:'roboto-bold',
            fontSize: 24,
            color: Colors.GRAY,
        }}>Choose your travelers</Text>
    
        </View>
    
    
    
      </View>




  )
}
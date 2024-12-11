import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';


export default function StartNewTripCard() {

    const router = useRouter();

  return (
    <View style={{
        padding: 20,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        gap:30
    }}>
    <Ionicons name="location-sharp" size={30} color="black" />
    
    <Text style={{
        fontSize: 25,
        fontFamily: 'roboto-medium',
    }}>
    No trips planned yet
    </Text>

    <Text style={{
        fontSize: 20,
        fontFamily: 'roboto',
        textAlign: 'center',
        color: Colors.GRAY
    }}>
    Looks like you haven't planned any trips yet. Start by adding a new trip.
    </Text>

    <TouchableOpacity
    onPress={()=> router.push('/create-trip/search-place')}
    
    style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 30,


    }}    
    
    >
    
        <Text style={{
            color: Colors.WHITE,
            fontFamily: 'roboto-medium',
            fontSize: 20
        }}>Start a new trip</Text>
    
    </TouchableOpacity>

    </View>
  )
}
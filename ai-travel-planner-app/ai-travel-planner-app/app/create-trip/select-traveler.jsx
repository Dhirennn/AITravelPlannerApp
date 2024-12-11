import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelerList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from './../../context/CreateTripContext'


export default function SelectTraveler() {

    // back button
    const navigation = useNavigation();

    const [selectedTraveler, setSelectedTraveler] = useState();

    const {tripData, setTripData} = useContext(CreateTripContext)


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })

    }, [])


    // executes when selectedTraveler changes
    useEffect(() => {
        setTripData({...tripData, 
            traveler: selectedTraveler
        })
    }, [selectedTraveler])

    // executes when selectedTraveler changes
    useEffect(() => {
        console.log(tripData);
    }, [tripData])    



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

        <FlatList
            data={SelectTravelerList}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    style={{
                        marginVertical: 10,

                    }}
                    onPress={() => {
                        setSelectedTraveler(item);
                    }}

                >
                    <OptionCard option={item} selectedTraveler={selectedTraveler} />
                </TouchableOpacity>
                )}
            />
        </View>
    
    

        <TouchableOpacity
            style={{
                backgroundColor: Colors.PRIMARY,
                padding: 20,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 40,
            }}
    
        
        >
            <Text
                style={{
                  color: Colors.WHITE,
                  fontFamily: 'roboto-medium',
                  fontSize: 20
                }}
            >Continue</Text>
        
        </TouchableOpacity>
    
      </View>




  )
}
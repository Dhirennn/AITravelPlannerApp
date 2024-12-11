import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import {CreateTripContext} from './../../context/CreateTripContext'


export default function SelectBudget() {

  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState();

  const {tripData, setTripData} = useContext(CreateTripContext);

  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    })
  }, [])

  useEffect(() => {
    selectedOption && setTripData({
      ...tripData,
      budget: selectedOption.title
    })
  }, [selectedOption])

  const onClickContinue = () => {
    if(!selectedOption) {
      alert('Please select a budget option.');
      return;
    }
    router.push('/create-trip/review-trip');
  }

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
        }}
        >Budget
      </Text>

      <View>
      
        <Text
          style={{
            fontFamily: 'roboto-bold',
            fontSize: 21,
            marginTop: '5%',
          }}
        >Choose a spending habit for your trip</Text>
      

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}

              style={{
                marginVertical: 20,
              }}
            >
              <OptionCard option={item} selectedOption={selectedOption}>
              
              </OptionCard>
            </TouchableOpacity>
          )}
        ></FlatList>


      </View>

      <TouchableOpacity
      onPress={() => {
        onClickContinue();
      }}
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
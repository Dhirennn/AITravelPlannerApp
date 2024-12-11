import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import DatePicker from 'react-native-modern-datepicker';
// import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function SelectDates() {

    const [range, setRange] = useState({ startDate: undefined, endDate: undefined });
    const [open, setOpen] = useState(false);


    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            
        })

    }, [])


    const onDismiss = React.useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirm = ({ startDate, endDate }) => {
      const dayCount = (endDate - startDate) / (1000 * 60 * 60 * 24);
      if (dayCount > 5) {
        // Show an error or re-open the picker
        alert("Please select an end date within 5 days of the start date.");
      } else {
        setRange({ startDate, endDate });
        setOpen(false);
      }
    };
    

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
          textAlign: 'center',
          marginTop: '50%',
          marginBottom: '15%',

        }}
      
      >Travel Dates</Text>

      <SafeAreaProvider>
      <View style={{}}>

      <TouchableOpacity
        onPress={() => setOpen(true)} uppercase={false}

        
        style={{
            padding:20,
            backgroundColor: Colors.PRIMARY,
            borderRadius:15,

        }}
    
    >
        <Text
            style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontSize: 18,
            }}
        
        >Choose Your Dates</Text>
      
  
    </TouchableOpacity>

        <DatePickerModal
          locale="en"
          mode="range"
          visible={open}
          onDismiss={onDismiss}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
          presentationStyle = 'pageSheet'
          label='Select Your Travel Dates'
          uppercase={true}
          validRange={{
            
            startDate: new Date(),
            endDate: new Date(new Date().getTime() + 10000 * 60 * 60 * 24 * 90),
          
          }}
          
        />
      </View>
    </SafeAreaProvider>

    </View>


  )
}

import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import { CreateTripContext } from "../context/CreateTripContext"
import { useState } from "react";

export default function RootLayout() {

  useFonts({
    'roboto': require('./../assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./../assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold': require('./../assets/fonts/Roboto-Bold.ttf')
  })


  const [tripData, setTripData] = useState([])


  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>
    <Stack screenOptions={{
      headerShown:false
    }}>
      
      {/* <Stack.Screen name="index" options={{
        headerShown:false
      }}/> */}
        <Stack.Screen name="(tabs)"/>

    </Stack>

    </CreateTripContext.Provider>



  );
}
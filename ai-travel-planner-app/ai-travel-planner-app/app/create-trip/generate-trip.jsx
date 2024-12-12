import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AIModel';
import { useRouter } from 'expo-router';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from './../../configs/FirebaseConfig';

export default function GenerateTrip() {

  const {tripData, setTripData} = useContext(CreateTripContext);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const user = auth.currentUser;

  useEffect(() => {
    tripData && generateAiTrip();
  }, [])


  const generateAiTrip = async () => {

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT.replace('{location}', tripData?.locationInfo?.name).replace('{totalDays}', tripData?.totalNoOfDays).replace('{totalNights}', tripData?.totalNoOfDays-1).replace('{traveler}', tripData.traveler?.title).replace('{budget}', tripData.budget).replace('{totalDays}', tripData?.totalNoOfDays).replace('{totalNights}', tripData?.totalNoOfDays-1);

    // console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    // console.log(result.response.text());

    const tripResp = JSON.parse(result.response.text());
    console.log("LMAOOOOOO" + tripResp);
    setLoading(false);


    // save to firebase

    const docId = (Date.now()).toString();
    const result_ = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResp,  // AI response
      tripData: JSON.stringify(tripData), // User selected data,
      docId: docId
    })


    router.push('(tabs)/mytrip');


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

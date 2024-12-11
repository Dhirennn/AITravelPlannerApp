import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/login.jpeg')}
      
        style={{

          width:'100%',
          height:500

        }}
      />

        <View style={styles.container}>

        <Text
        
          style={{
            fontSize:30,
            fontFamily:'roboto-bold',
            textAlign:'center',
            marginTop: 10
            
          }}>AI Travel Planner</Text>

          
          <Text
          
          style={{
            marginTop:'5%',
            fontSize:16,
            fontFamily:'roboto-regular',
            textAlign:'center',
            color: Colors.GRAY


          }}
          
          >
          Plan your perfect trip effortlessly. Personalized itineraries, real-time updates, and seamless adventures await. Your journey starts with us!
          
          </Text>


          <View style={styles.button}>
        
          <Text
            style={{
              color:Colors.WHITE,
              textAlign:'center',
              padding:3,
              fontSize:16

            }}


          >Sign In With Google</Text>
        
        </View>




        </View>




    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    marginTop:-20,
    height:'100%',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:25,
  },
  button:{
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:'25%'
  }



})





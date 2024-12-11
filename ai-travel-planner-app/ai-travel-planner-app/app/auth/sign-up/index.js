import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'
import { Colors } from './../../../constants/Colors'


export default function SignUp() {

    const navigation = useNavigation();

    const router = useRouter();
  
    useEffect(
        () => {
            navigation.setOptions({
                headerShown:false
            })
        }
        
        , [])


  return (
    <View style={{
        padding:25,
        paddingTop:'20%',
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <Text
        style={{
            fontFamily:'roboto-bold',
            fontSize:30
        }}
      >Create New Account</Text>


            { /** Full Name of User */}

            <View style={{
            marginTop:50
            }}>
            <Text style={{
                fontFamily:'roboto'
            }}>Full Name</Text>
            <TextInput style={styles.input} placeholder="Enter your full name"
            placeholderTextColor="#C0C0C0"></TextInput>
        </View>



            { /** Email */}

            <View style={{
            marginTop:'5%'
            }}>
            <Text style={{
                fontFamily:'roboto'
            }}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter email"
            placeholderTextColor="#C0C0C0"></TextInput>
        </View>

        { /** Password */}
        <View style={{
            marginTop:'5%'
            }}>
            <Text style={{
                fontFamily:'roboto'
            }}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter password"
            placeholderTextColor="#C0C0C0"
            secureTextEntry={true}
            
            ></TextInput>
        </View>



        { /** Create Account Button */}

        <View
        style={{
            padding:20,
            backgroundColor: Colors.PRIMARY,
            borderRadius:15,
            marginTop:50

        }}
    
    >
        <Text
            style={{
                color:Colors.WHITE,
                textAlign:'center'
            }}
        
        >Create Account</Text>
        
    
    </View>



    { /** Sign-In Button */}

    <TouchableOpacity

        onPress={()=> {router.replace('/auth/sign-in')}}    

        style={{
            padding:20,
            backgroundColor: Colors.WHITE,
            borderRadius:15,
            marginTop:20,
            borderWidth:1

        }}
    
    >
        <Text
            style={{
                color:Colors.PRIMARY,
                textAlign:'center'
            }}
        
        >Sign In</Text>
        
    
    </TouchableOpacity>


    </View>
  )
}



const styles = StyleSheet.create(

    {
        input:{
            padding:15,
            borderWidth:1,
            borderRadius:15,
            borderColor: Colors.GRAY,
            fontFamily:'roboto'

        }


    }



)
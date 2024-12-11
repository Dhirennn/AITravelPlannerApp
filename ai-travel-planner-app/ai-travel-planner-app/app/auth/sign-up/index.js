import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from './../../../configs/FirebaseConfig'


export default function SignUp() {

    const navigation = useNavigation();

    const router = useRouter();

    const [email, setEmail] = useState();

    const [password, setPassword] = useState(); 

    const [fullName, setFullName] = useState(); 
  
    useEffect(
        () => {
            navigation.setOptions({
                headerShown:false
            })
        }
        
        , [])


    const onCreateAccount = () => {

        if(!email && !password && !fullName){
            // add toast for ios and android here later on
            return;

        }

        

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          router.replace('/mytrip')
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          // ..
        });
    }


  return (
    <View style={{
        padding:25,
        paddingTop:'20%',
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>

        {/** Back button to sign-in page */}

        <TouchableOpacity onPress={()=> router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" style={{
                marginTop:'-10%',
                marginBottom:'5%'
            }}/>
        </TouchableOpacity>


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
            placeholderTextColor="#C0C0C0"
            onChangeText={(value)=>setFullName(value)}
            ></TextInput>
        </View>



            { /** Email */}

            <View style={{
            marginTop:'5%'
            }}>
            <Text style={{
                fontFamily:'roboto'
            }}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter email"
            placeholderTextColor="#C0C0C0"
            onChangeText={(value)=>setEmail(value)}
            ></TextInput>
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
            onChangeText={(value)=>setPassword(value)}
            ></TextInput>
        </View>



        { /** Create Account Button */}

        <TouchableOpacity
        onPress={onCreateAccount}
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
        
    
    </TouchableOpacity>



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
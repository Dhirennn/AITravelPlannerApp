import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/FirebaseConfig'

export default function SignIn() {
  
    const navigation = useNavigation();

    const router = useRouter();

    const [email, setEmail] = useState();
    
    const [password, setPassword] = useState();


    const onSignIn = () => {


        if(!email && !password){
            return;
        }


        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)

            // If wrong password, tell the user
            if(error.code == 'auth/invalid-credential'){
            }

        });
    }
  
    useEffect(
        () => {
            navigation.setOptions({
                headerShown:false
            })
        }
        
        , [])
  
    return (
        <View
        style={{
            padding:25,
            paddingTop:80,
            marginTop:'15%',
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}
        >


        {/** Back button to landing page */}

        <TouchableOpacity onPress={()=> router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" style={{
                marginTop:'-15%',
                marginBottom:'5%'
            }}/>
        </TouchableOpacity>


            <Text
                style={{
                    fontFamily:'roboto-bold',
                    fontSize:30,
                    marginTop:'5%'
                }}>Let's Sign You In!</Text>

            <Text
            style={{
                fontFamily:'roboto-regular',
                fontSize:30,
                color:Colors.GRAY,
                marginTop:'5%'
            }}>Welcome Back</Text>

            <Text
            style={{
                fontFamily:'roboto-regular',
                fontSize:30,
                color:Colors.GRAY,
                marginTop:'2%'
            }}>You've Been Missed</Text>


            { /** Email */}

            <View style={{
                marginTop:60
            }}>
                <Text style={{
                    fontFamily:'roboto'
                }}>Email</Text>
                <TextInput style={styles.input} 
                onChangeText={(value)=>setEmail(value)}
                placeholder="Enter email"
                placeholderTextColor="#C0C0C0"></TextInput>
            </View>

            { /** Password */}
            <View style={{
                marginTop:20
            }}>
                <Text style={{
                    fontFamily:'roboto'
                }}>Password</Text>
                <TextInput style={styles.input} 
                onChangeText={(value)=>setPassword(value)}
                placeholder="Enter password"
                placeholderTextColor="#C0C0C0"
                secureTextEntry={true}
                
                ></TextInput>
            </View>

            { /** Sign-In Button */}

            <TouchableOpacity

                onPress={onSignIn}
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
                
                >Sign In</Text>
                
            
            </TouchableOpacity>



            { /** Create Account Button */}

            <TouchableOpacity

                onPress={()=> {router.replace('/auth/sign-up')}}    

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
                
                >Create Account</Text>
                
            
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
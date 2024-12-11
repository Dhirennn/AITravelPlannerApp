import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
  
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
        <View
        style={{
            padding:25,
            paddingTop:80,
            marginTop:'15%',
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}
        >
        <Ionicons name="arrow-back" size={24} color="black" />
            <Text
                style={{
                    fontFamily:'roboto-bold',
                    fontSize:30,
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
                <TextInput style={styles.input} placeholder="Enter email"
                placeholderTextColor="#C0C0C0"></TextInput>
            </View>

            { /** Password */}
            <View style={{
                marginTop:20
            }}>
                <Text style={{
                    fontFamily:'roboto'
                }}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter password"
                placeholderTextColor="#C0C0C0"
                secureTextEntry={true}
                
                ></TextInput>
            </View>

            { /** Sign-In Button */}

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
                
                >Sign In</Text>
                
            
            </View>



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
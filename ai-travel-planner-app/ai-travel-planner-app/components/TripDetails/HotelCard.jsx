import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPhotoRef } from '../../services/GooglePlaceAPI';

export default function HotelCard({item, index}) {


  const [photoRef, setPhotoRef] = useState();

  useEffect(() => {
    getGooglePhotoRef();
  }, [])

  const getGooglePhotoRef = async() => {
    const result = await getPhotoRef(item.hotelName);
    // console.log("RESULT" + result?.results[0].photos[0]);

    setPhotoRef(result?.results[0].photos[0]?.photo_reference);

  }


  return (
              <View
                style={{
                  marginRight: 35,
                  width:200
                }}
              >

              
              
    
              <Image 
              source={{uri:
                'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
                +photoRef
                +'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                style={{
                  width:200,
                  height:120,
                  borderRadius:15
                }}
                
                >
              </Image>
    
              <View
                style={{
                  padding:5
                }}
              >
                <Text
                  style={{
                    fontFamily: 'roboto-medium',
                    fontSize: 16,
                    marginTop: 5,
                    
                  }}
                >{item.hotelName}</Text>
              </View>
    
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                  <Text
                    style={{
                      fontFamily: 'roboto',
                      fontSize: 14,
                      color: 'gray',
                      marginTop: 5
                    }}
                    >⭐ {item.rating}
                  </Text>
    
                  <Text
                  style={{
                    fontFamily: 'roboto',
                    fontSize: 14,
                    color: 'gray',
                    marginTop: 5
                  }}
                  >💰 {item.pricePerNight}/night
                </Text>
              </View>
              
    
              </View>
  )
}
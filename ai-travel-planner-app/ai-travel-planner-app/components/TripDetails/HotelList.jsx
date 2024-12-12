import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function HotelList({hotelList}) {
  return (
    <View
      style={{
        marginTop:20,      }}
    >
      <Text
        style={{
          fontFamily: 'roboto-bold',
          fontSize: 20,
        }}
      >
        🏨 Hotel Recommendation
      </Text>

      <FlatList
        data={hotelList}
        style={{
          marginTop: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View
            style={{
              marginRight: 35,
              width:200
            }}
          >

          <Image 
            source={require('./../../assets/images/login.jpeg')}
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

        )}
      >
      
      </FlatList>

    </View>
  )
}
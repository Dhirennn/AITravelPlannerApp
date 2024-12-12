import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { getPhotoRef } from '../../services/GooglePlaceAPI';
import HotelCard from './HotelCard';

export default function HotelList({hotelList}) {


  // useEffect(() => {
  //   getGooglePhotoRef();
  // }, [])

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
          <HotelCard item={item} index={index}></HotelCard>

        )}
      >
      
      </FlatList>

    </View>
  )
}
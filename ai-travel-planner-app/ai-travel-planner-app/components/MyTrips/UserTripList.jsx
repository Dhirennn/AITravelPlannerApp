import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';

export default function UserTripList({ userTrips }) {
  // Ensure userTrips exists and has at least one trip
  const hasTrips = Array.isArray(userTrips) && userTrips.length > 0;
  const LatestTrip = hasTrips ? JSON.parse(userTrips[0]?.tripData) : null;

  return (
    <View>
      {hasTrips ? (
        <>
          <View
            style={{
              marginTop: '6%',
            }}
          >
            <Image
              source={require('./../../assets/images/login.jpeg')}
              style={{
                width: '100%',
                height: 240,
                borderRadius: 15,
              }}
            />
          </View>


          {/* Trip Display */}
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: 'roboto-medium',
                fontSize: 20,
              }}
            >
              {LatestTrip.locationInfo?.name}
            </Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
          <Text
            style={{
              fontFamily: 'roboto',
              fontSize: 16,
              color: Colors.GRAY,
            }}
          >
            {moment(LatestTrip.startDate).format('DD MMM YYYY')}
          </Text>

              <Text
                style={{
                  fontFamily: 'outfit',
                  fontSize: 17,
                  color: Colors.GRAY,
                }}
              >
                🚌 {LatestTrip.traveler.title}
              </Text>
          
              </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.PRIMARY,
                      padding: 15,
                      borderRadius: 15,
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontFamily: 'roboto-medium',
                        fontSize: 15,
                      }}
                    
                    >See your plan</Text>
                
                </TouchableOpacity>


          </View>
            

          // USER TRIP CARDS
          {userTrips.map((trip, index) => (
            <UserTripCard userTrip={trip} key={index} />
          ))
          }


        </>
      ) : (
        <Text
          style={{
            fontFamily: 'roboto',
            fontSize: 16,
            color: Colors.GRAY,
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          No trips available.
        </Text>
      )}


      
    </View>
  );
}
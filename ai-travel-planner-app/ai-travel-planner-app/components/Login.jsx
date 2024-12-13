// Login.jsx

import React from 'react';
import { 
  View, 
  Text, 
  ImageBackground, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient overlays
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; // Optional: For decorative icons

const { width, height } = Dimensions.get('window');

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Full-Screen Background Image */}
      <ImageBackground
        source={require('./../assets/images/login.jpeg')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Gradient Overlay for Text Readability */}
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
          style={styles.gradientOverlay}
        />

        {/* Content Container */}
        <View style={styles.contentContainer}>
          {/* "Cuti" Title */}
          <Text style={styles.title}>Cuti</Text>

          {/* Tagline */}
          <Text style={styles.tagline}>
            Plan your perfect trip effortlessly. Personalized itineraries, real-time updates, and seamless adventures await. Your journey starts with us!
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/auth/sign-in')}
            activeOpacity={0.8} // For a subtle feedback effect
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.WHITE, // Fallback color
  },
  imageBackground: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -59, // Adjust to position content vertically
  },
  gradientOverlay: {
    position: 'absolute',
    width: width,
    height: height,
  },
  contentContainer: {
    position: 'absolute',
    top: '40%', // Adjust to position content vertically
    width: '85%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 80,
    fontFamily: 'great-vibes', // Ensure this font is loaded
    color: Colors.WHITE,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  tagline: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    color: Colors.WHITE,
    lineHeight: 24, // Improved readability
  },
  button: {
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: Colors.WHITE,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.65,
    elevation: 10, // For Android shadow
  },
  buttonText: {
    color: Colors.PRIMARY,
    fontSize: 20,
    fontFamily: 'roboto-medium',
  },
});

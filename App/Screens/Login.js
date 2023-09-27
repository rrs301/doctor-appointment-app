import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/images/app.png'
import Colors from '../../assets/Shared/Colors'
import { Button } from 'react-native'
import SignInWithOAuth from '../Components/SignInWithOAuth'
export default function Login() {
  return (
    <View style={{alignItems:'center',
    backgroundColor:Colors.LIGHT_GRAY}}>
      <Image source={app}
      style={styles.appImage}
      />
      <View style={{backgroundColor:Colors.white,
        padding:25,
        alignItems:'center',
        marginTop:-50,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        
    }}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{textAlign:'center',marginTop:20,
    }}>Book Appointments Effortlessly and manager your health journey</Text>
       <SignInWithOAuth/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    appImage:{
        width:280,
        height:450,
        objectFit:'cover',
        marginTop:100,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
    },
    heading:{
        fontSize:28,
        fontWeight:'bold'
    }
})
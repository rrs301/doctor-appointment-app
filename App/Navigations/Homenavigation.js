import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctorsListScreen from '../Screens/HospitalDoctorsListScreen';

const Stack=createStackNavigator();
export default function Homenavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="hospital-doctor-list-screen"
        component={HospitalDoctorsListScreen}/>
    </Stack.Navigator>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctorsListScreen from '../Screens/HospitalDoctorsListScreen';
import HospitalDetails from '../Screens/HospitalDetails';
import BookAppointment from '../Screens/BookAppointment';

const Stack=createStackNavigator();
export default function Homenavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="hospital-doctor-list-screen"
        component={HospitalDoctorsListScreen}/>

        <Stack.Screen name='hospital-detail' component={HospitalDetails} />
        <Stack.Screen name='book-appointment' 
        component={BookAppointment} />
    </Stack.Navigator>
  )
}
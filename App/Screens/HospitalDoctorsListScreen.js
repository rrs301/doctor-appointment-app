import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorsScreen./HospitalDoctorTab';

export default function HospitalDoctorsListScreen() {

  const param=useRoute().params;
  return (
    <View style={{padding:20}}>
     
      <PageHeader title={param?.categoryName}/>

      <HospitalDoctorTab/>
    </View>
  )
}
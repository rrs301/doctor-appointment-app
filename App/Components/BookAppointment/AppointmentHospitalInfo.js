import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../Shared/PageHeader'
import Colors from '../../../assets/Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import HorizontalLine from '../Shared/HorizontalLine';

export default function AppointmentHospitalInfo({hospital}) {
  return (
    <View>
      <PageHeader title={'Book Appointment'} />
      <View style={{marginTop:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:15}}>
        <Image source={{uri:hospital.attributes.image.data.attributes.url}}
          style={{width:100,height:100,borderRadius:99}}
        />
        <View>
          <Text style={{
            fontSize:20,
            fontFamily:'appfont-semi',
            marginBottom:8
          }}>{hospital.attributes.Name}</Text>
          <View style={{
                display: 'flex', flexDirection: 'row',
                gap: 5, alignItems: 'center'
            }}>
                <Ionicons name="location" size={22} color={Colors.PRIMARY} />
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'appfont',
                    color: Colors.GRAY,
                    width:'70%'
                }}>{hospital.attributes.Address}</Text>
            </View>
            
        </View>

      </View>
      <HorizontalLine/>
    </View>
  )
}
import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import HorizontalLine from '../Shared/HorizontalLine'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

export default function AppointmentCardItem({appointment}) {
  return (
    <View style={{padding:10,
    borderWidth:1,
    borderColor:Colors.LIGHT_GRAY,
    borderRadius:10,
    backgroundColor:Colors.white,
    marginTop:15
    }}>
      <Text style={{
        fontSize:16,
        marginTop:10,
        fontFamily:'appfont-semi'
      }}>{moment(appointment.attributes.Date).format('MMM Do,  YYYY')} - {appointment.attributes.Time}</Text>
        <HorizontalLine/>
    <View style={{display:'flex',
flexDirection:'row',
gap:10,alignItems:'center'}}>
        <Image source={{uri:'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696464000&semt=sph'
        }}
        style={{height:100,
            borderRadius:10,
        width:90}}
        />
        <View>
            <Text style={{
                fontSize:16,
                fontFamily:'appfont-semi'
            }}>{appointment.attributes.hospitals.data[0].attributes.Name}</Text>
              <View style={{display:'flex',flexDirection:'row',
    gap:5,alignItems:'center',marginTop:5}}>
            <Ionicons name="location" size={20} color={Colors.PRIMARY}/>
            <Text style={{fontFamily:'appfont',
        color:Colors.GRAY}}>{appointment.attributes.hospitals.data[0].attributes.Address}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',
    gap:5,alignItems:'center',marginTop:5}}>
            <Ionicons name="document-text" size={20} color={Colors.PRIMARY}/>
            <Text style={{fontFamily:'appfont',
        color:Colors.GRAY}}>Booking Id: #{appointment.id}</Text>
        </View>
        </View>
    </View>
    </View>
  )
}
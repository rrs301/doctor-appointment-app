import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';
export default function DoctorCardItem({doctor}) {
  return (
    <View style={{backgroundColor:Colors.white,
        padding:10,borderRadius:10,marginBottom:20,}}>
        <View style={{display:'flex',flexDirection:'row',
        gap:20,
        
            }}>
            <Image source={{uri:doctor.attributes
            .image.data.attributes.url}}
            style={{width:110,height:120,borderRadius:10}}
            />
            <View style={{marginTop:10}}>
                {doctor.attributes.Premium==true?
                <View style={{display:'flex',
                flexDirection:'row',
                backgroundColor:Colors.SECONDARY,
                padding:5,borderRadius:99,paddingHorizontal:10,
                gap:4,alignItems:'center'}}>
                    <Ionicons name="md-shield-checkmark-sharp" 
                    size={18} color={Colors.PRIMARY} />
                    <Text style={{fontFamily:'appfont',
                color:Colors.PRIMARY}}>Proffessional Doctor</Text>
                </View>
               
                :null}
                <Text style={{fontSize:17,
                fontFamily:'appfont-semi',marginTop:5}}>{doctor.attributes.Name}</Text>

<Text style={{color:Colors.GRAY,
                fontFamily:'appfont',marginTop:1}}>{doctor.attributes.categories.data[0].attributes.Name}</Text>

                <Text style={{fontFamily:'appfont',
            color:Colors.PRIMARY,marginTop:3}}>{doctor.attributes.Year_of_Experience}</Text>
            </View>
            
        </View>
       <TouchableOpacity style={{marginTop:10,padding:10,
        backgroundColor:Colors.SECONDARY,
        borderRadius:10
        }}>
            <Text style={{color:Colors.PRIMARY,
            textAlign:'center',fontFamily:'appfont-semi'}}>Make a Appointment</Text>
       </TouchableOpacity>
    </View>
  )
}
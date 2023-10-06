import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Colors from '../../../assets/Shared/Colors'

export default function HospitalDoctorTab({activeTab}) {
    const [activeIndex,setActiveIndex]=useState(0)
  return (
    <View style={{marginTop:10}}>
        <View style={{display:'flex',flexDirection:'row',
    alignItems:'center',justifyContent:'space-around'}}>
            <TouchableOpacity 
                style={[
                    activeIndex==0
                    ?styles.activeTab
                    :styles.inActiveTab
                ]}
            onPress={()=>{setActiveIndex(0);activeTab('Hospital')}}>
                <Text style={[
                    activeIndex==0
                    ?styles.activeText
                    :styles.inActiveTaxt
                ]}>Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[
                activeIndex==1
                ?styles.activeTab
                :styles.inActiveTab
            ]}
            onPress={()=>{setActiveIndex(1);activeTab('Doctor')}}>
                <Text style={[
                    activeIndex==1
                    ?styles.activeText
                    :styles.inActiveTaxt
                ]}>Doctors</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    activeText:{
        textAlign:'center',
        fontFamily:'appfont',
        fontSize:18,
        color:Colors.PRIMARY,
    },
    inActiveTaxt:{
        textAlign:'center',
        fontFamily:'appfont',
        fontSize:18,
        color:Colors.GRAY
    },
    activeTab:{
        borderBottomWidth:2,
        borderBottomColor:Colors.PRIMARY,
        padding:3,
       
        
        
    },
    inActiveTab:{
        borderBottomWidth:1,
        borderBottomColor:Colors.GRAY,
        padding:3,
       
    }
})
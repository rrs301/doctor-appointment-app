import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

export default function SubHeading({subHeadingTitle,seelAll=true}) {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10,
        marginTop:10
    }}>
        <Text style={{
            fontSize: 20,
            fontFamily: 'appfont-semi'
        }}>{subHeadingTitle}</Text>
       {seelAll? <Text style={{
            fontFamily: 'appfont',
            color: Colors.PRIMARY
        }}>See All</Text>:null}
    </View>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

export default function HorizontalLine() {
  return (
    <View style={{
        borderBottomWidth: 1,
        borderColor: Colors.LIGHT_GRAY, margin: 5, 
        marginBottom: 15,
        marginTop:15
    }}></View>
  )
}
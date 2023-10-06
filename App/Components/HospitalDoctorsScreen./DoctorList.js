import { View, Text, FlatList } from 'react-native'
import React from 'react'
import DoctorCardItem from '../Shared/DoctorCardItem'

export default function DoctorList({doctorsList}) {
  return (
    <View style={{marginTop:20}}>
      <FlatList
        data={doctorsList}
        renderItem={({item})=>(
            <DoctorCardItem doctor={item} />
        )}
      />
    </View>
  )
}
import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'

export default function Slider() {
    const [sliderList,setSliderList]=useState();
    // const sliderList=[
    //     {
    //         id:1,
    //         name:'Slider 1',
    //         imageUrl:'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png'
    //     },
    //     {
    //         id:2,
    //         name:'Slider 2',
    //         imageUrl:'https://img.freepik.com/premium-vector/medical-healthcare-online-consultation-banner_42775-520.jpg'
    //     }
    // ]

    useEffect(()=>{
       getSlider();   
    },[])

    const getSlider=()=>{
        GlobalApi.getSlider().then(resp=>{   
            setSliderList(resp.data.data)
        })
    }
  return ( 
    <View style={{marginTop:10}}>
        <FlatList
            data={sliderList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>( 
                <Image source={{uri:item.attributes.Image.data.attributes.url}}
                    style={{
                        width:Dimensions.get('screen').width*0.9,
                        height:170,
                        borderRadius:10,
                        margin:2
                }}
                />
            )}
        />
    </View>
  )
}
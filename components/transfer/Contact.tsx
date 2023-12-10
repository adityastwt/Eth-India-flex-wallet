import { View, Text, Image, TouchableHighlight, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { router } from 'expo-router';

const Contact = () => {

	const {height, width} = useWindowDimensions();

  return (
    <View className={'pt-3 pb-2 px-5'} style={{height: height/2.5}}>

                <View className='flex flex-col space-y-6'>
                    <View className='bg-[#FFFEFE] px-2 py-5 h-full w-full rounded-3xl flex flex-col items-center justify-center space-y-[30vh]'>
                        <Image source={require('../../assets/images/contact.png')} style={{height: height/11, width: height/11}} />
                        <Text style={{fontSize: width/26, textAlign: 'center', lineHeight: width/18}} className='text-gray-400'>Send money to your friends anywhere in the world, instantly for free!</Text>
                        <Pressable className=''>
                            <Text style={{fontSize: width/28, color:'#2C65E2', fontFamily:'Satoshi'}} >Enable conntact permission</Text>
                        </Pressable>
                    </View>
                </View>
    </View>
  )
}

export default Contact
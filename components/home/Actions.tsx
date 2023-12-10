import { View, Text, Image } from 'react-native'
import React from 'react'

const Actions = () => {
  return (
    <View className='mt-4 px-5 flex flex-col space-y-4 '>
        <View className='h-[90px] w-full bg-[#FFFEFE] rounded-2xl flex flex-row justify-between px-5 py-2 items-center'>
            <View className='flex flex-row space-x-4 h-full items-center'>
                <Image className='w-[50px] h-[50px] rounded-full' source={require('../../assets/images/logo.png')} />
                <View className='flex flex-col space-y-1'>
                    <Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Customize your Home screen</Text>
                    <Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#838892]'>Long press and drag widgets to reorder</Text>
                </View>
            </View>
        </View>
        <View className='h-[90px] w-full bg-[#FFFEFE] rounded-2xl flex flex-row justify-between px-5 py-2 items-center'>
            <View className='flex flex-row space-x-4 h-full items-center'>
                <View className='h-[50px] w-[50px] bg-[#C1EBD2] rounded-full'>
                </View>
                <View className='flex flex-col space-y-1'>
                    <Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Sign in </Text>
                    <Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#DC832E]'>to access your account</Text>
                </View>
            </View>
            <View className='flex flex-col space-y-1'>
                <Text style={{ fontFamily: 'Satoshi'}} className='font-medium text-[15px] text-[#737A87]'>-£0.0</Text>
                <Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#DC832E]'>Pending</Text>
            </View>
        </View>
    </View>
  )
}

export default Actions
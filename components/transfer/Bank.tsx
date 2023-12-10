import { View, Text, Image, TouchableHighlight, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { router } from 'expo-router';

const Bank = () => {

	const {height, width} = useWindowDimensions();

  return (
    <View className={'pt-3 pb-2 px-5'}>
			<View className='bg-[#FFFFFF] rounded-2xl'>
				{/* <View className='h-[90px] flex flex-row space-x-7 px-5 py-2 items-center'>
					<View className=''>
						<MaterialIcons className='' name='group' size={30} color="#2C65E2"/>
					</View>
					<View className='flex flex-row space-x-4 h-full items-center'>
						<View className='flex flex-col space-y-1'>
							<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Group</Text>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Settle expenses with friends</Text>
						</View>
					</View>
				</View> */}
				<View className='h-[90px] flex flex-row space-x-7 px-5 py-2 items-center'>
					<View className=''>
						<MaterialCommunityIcons className='' name='bank' size={30} color="#2C65E2"/>
					</View>
					<View className='flex flex-row space-x-4 h-full items-center'>
						<View className='flex flex-col space-y-1'>
							<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Bank Transfer</Text>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Send money from your bank account</Text>
						</View>
					</View>
				</View>
				<View className='h-[90px] flex flex-row space-x-7 px-5 py-2 items-center'>
					<View className=''>
						<Entypo className='' name='align-top' size={30} color="#2C65E2"/>
					</View>
					<View className='flex flex-row space-x-4 h-full items-center'>
						<View className='flex flex-col space-y-1'>
							<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Crypto Network</Text>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Send money over a crypto network</Text>
						</View>
					</View>
				</View>
			</View>
    </View>
  )
}

export default Bank
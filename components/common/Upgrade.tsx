/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Upgrade = () => {

	return (
		<View className='h-[360px] bg-[#050104] rounded-2xl flex flex-col'>
			<View className='h-1/2 px-4 flex flex-row justify-end pt-5'>
				<AntDesign className='' name='close' size={24} color="white"/>
			</View>
			<View className='h-1/2 flex flex-col px-6 justify-between pb-[16px] '>
				<View>
					<Text className='text-[13px] font-extralight text-gray-300'>Upgrade your plan</Text>
					<View className='mt-2'>
						<Text className='text-[30px] font-bold text-white' style={{ fontFamily: 'Satoshi'}}>Get 1 month free</Text>
					</View>
				</View>
				<View className='flex flex-row pr-20 space-x-4 items-center'>
					<View className='mr-8'>
						<Text className='text-[13px] font-light text-gray-300'>Enjoy higher FX, limits, insurance cover and other benefits</Text>
					</View>
					<View className='px-3 py-2 bg-[#E0F0FC] flex flex-row rounded-2xl items-center'>
						<Text className="text-[14px] text-[#2C64E3] font-medium">View Plans</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Upgrade;
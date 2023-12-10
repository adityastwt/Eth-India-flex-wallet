/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import Upgrade from '../common/Upgrade';
import { router } from 'expo-router';

const Apps = () => {

	const tokens = () => {
		//@ts-ignore
		router.push('/wallet/tokens');
	};
	const collectibles = () => {
		//@ts-ignore
		router.push('/wallet/collectibles');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View className=''>
				<Upgrade />
			</View>
			<View className='mt-10 px-2'>
				<Text className='text-[18px] font-bold'>Essentials</Text>
			</View>
			<View className='px-6 mt-6 flex flex-row justify-between items-center'>
				<TouchableHighlight underlayColor={'transparent'} onPress={collectibles}>
					<View className='flex flex-col space-y-2 items-center'> 
						<Image className='w-[110px] h-[110px] rounded-xl' source={require('../../assets/images/items1.png')} />
						<Text className='text-[15px] font-bold'>Collectibles</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight underlayColor={'transparent'} onPress={tokens}>
					<View className='flex flex-col space-y-2 items-center'> 
						<Image className='w-[110px] h-[110px] rounded-xl' source={require('../../assets/images/items2.png')} />
						<Text className='text-[15px] font-bold'>Tokens </Text>
					</View>
				</TouchableHighlight>
			</View>
			<View className='px-6 mt-6 flex flex-row justify-between items-center'>
				<View className='flex flex-col space-y-2 items-center'> 
					<Image className='w-[110px] h-[110px] rounded-xl' source={require('../../assets/images/items3.png')} />
					<Text className='text-[15px] font-bold'>Cards</Text>
				</View>
				<View className='flex flex-col space-y-2 items-center'> 
					<Image className='w-[110px] h-[110px] rounded-xl' source={require('../../assets/images/items4.png')} />
					<Text className='text-[15px] font-bold'>Rewards</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Apps;
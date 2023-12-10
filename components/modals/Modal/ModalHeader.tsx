import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


interface IModalHeaderProps {
  url: string;
}

//ToDo: QoL: Add in the Emoji scroll animation
export function ModalHeader({ url}: IModalHeaderProps) {
	return (
		<View className='flex flex-col'>
			<View className='flex flex-row justify-center space-x-1 mt-6'>
				<Text className='text-[16px] font-medium'>Connection request</Text>
			</View>
			<View className='flex flex-row justify-center space-x-1 mt-8 items-center'>
				<Entypo className='' name='lock' size={16} color="black"/>
				<Text className='text-[12px] font-medium' >{url?.slice(8)}</Text>
			</View>
			<View className='flex flex-row justify-center mt-1 mr-1 items-center'>
				<Entypo className='' name='dot-single' size={22} color="green"/>
				<Text className='text-[10px] font' >Localhost</Text>
			</View>
			<View className='text-center mt-8 px-6'>
				<Text className='text-[14px] text-center '>By clicking connect, you allow this dapp to view your public address. This is an important security step to protect your data from potential phishing risks.</Text>
			</View>

		</View>
	);
}
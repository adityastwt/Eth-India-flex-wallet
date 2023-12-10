/* eslint-disable @typescript-eslint/ban-ts-comment */
import { View, Text, TouchableHighlight, StatusBar, TextInput, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ModalScreen() {

	const [search, setSearch] = React.useState('');
	const [hide, setHide] = React.useState(false);

	const back = () => {
		//@ts-ignore
		router.push('/wallet/(tabs)/hub');
	};


	return (
		<View className='h-full bg-[#F9F8F9] flex-1 mt-4' >
			<SafeAreaView>
				<StatusBar  backgroundColor='#F6F7F6' />
				<View className='top-0 flex flex-col pt-1 px-4'>
					<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4 '>
						<AntDesign className='' name='close' size={24} color="black"/>
					</TouchableHighlight>
					<Text className="text-black text-[32px] font-bold" style={{ fontFamily: 'GeneralSans'}} >Tokens</Text>
					<View className='mt-6 flex flex-row items-center justify-between'>
						<Pressable onPress={() => {router.push('/wallet/search')}} className={'bg-[#EDEEF3] text-[#9E9E9E] w-full flex flex-row space-x-5  py-[5px] px-3 rounded-3xl items-center'} >
							<IonIcons name="search" size={22} color="gray"/>
							<TextInput editable={false} className='text-[#9E9E9E]' placeholderTextColor="#9E9E9E"  autoCorrect={false} placeholder='Search' />
						</Pressable>
					</View>
				</View>
				{
					!hide && 
					<LinearGradient colors={['#ee7941', '#e0733e', '#ca683b']} className='h-[360px] bg-gradient-to-b	from-sky-500 to-indigo-500 rounded-2xl flex flex-col mx-4 mt-8'>
						<Pressable onPress={() => {setHide(true)}} className='h-1/2 px-4 flex flex-row justify-end pt-5'>
							<AntDesign className='' name='close' size={24} color="white"/>
						</Pressable>
						<View className='h-1/2 flex flex-col px-6 justify-between pb-[16px] '>
							<View>
								<View className='mt-2'>
									<Text className='text-[30px] font-bold text-white' style={{ fontFamily: 'Satoshi'}}>Store your crypto safely</Text>
								</View>
							</View>
							<View className='flex flex-row pr-[60px] space-x-4 items-center'>
								<View className='mr-8'>
									<Text className='text-[13px] font-light text-gray-300'>Store and use your crypto tokens safely and with full custody</Text>
								</View>
								<View className='px-3 py-2 bg-[#E0F0FC] flex flex-row rounded-2xl items-center'>
									<Text className="text-[14px] text-[#2C64E3] font-medium">See how</Text>
								</View>
							</View>
						</View>
					</LinearGradient>
				}
			</SafeAreaView>
		</View>
	);
}
  
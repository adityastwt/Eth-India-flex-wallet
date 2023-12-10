/* eslint-disable no-mixed-spaces-and-tabs */
import { View, Text, TouchableHighlight, StatusBar, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
	country: boolean;
	name: boolean;
	dob: boolean;
	address: boolean;
	email: boolean;
}

const initialState = {
	country: true,
	name: false,
	dob: false,
	address: false,
	email: false
};

async function setItem(key: string, value: string) {
	try {
	  await AsyncStorage.setItem(key, value);
	  console.log(`Data with key "${key}" has been stored.`);
	} catch (error) {
	  console.error('Error storing data:', error);
	}
}
  

export default function ModalScreen() {

	const [state, setState] = React.useState<State>(initialState);

	const back = () => {
		if(state.country){
			router.push('..');
		} 
		if(state.name){
			setState((prevState) => ({
				...prevState, name: false, country: true
			}));
		} 
		if(state.dob){
			setState((prevState) => ({
				...prevState, name: true, dob: false
			}));
		} 
		if(state.address){
			setState((prevState) => ({
				...prevState, address: false, dob: true
			}));
		} 
		if(state.email){
			setState((prevState) => ({
				...prevState, email: false, address: true
			}));
		} 
	};

	const next = async () => {
		if(state.country){
			setState((prevState) => ({
				...prevState, name: true, country: false
			}));
		} 
		if(state.name){
			setState((prevState) => ({
				...prevState, name: false, dob: true
			}));
		} 
		if(state.dob){
			setState((prevState) => ({
				...prevState, address: true, dob: false
			}));
		} 
		if(state.address){
			setState((prevState) => ({
				...prevState, email: true, address: false
			}));
		} 
		if(state.email){
			await setItem('test1', 'abcd');
			router.push('/login/');
		} 
	};

	return (
		<View className='h-full bg-[#F6F7F6] flex flex-col justify-between mt-4' >
			{
				state.country &&
                <View className='top-0 flex flex-col pt-1 px-4'>
                	<StatusBar  backgroundColor='#F6F7F6' />
                	<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4'>
                    	<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
                	</TouchableHighlight>
                	<Text className="text-black text-[34px] font-bold" style={{ fontFamily: 'Satoshi'}} >Country of residence</Text>
                	<View className='mt-3 px-[1px] pr-4'>
                    	<Text className="text-[13px] text-[#737B87]" style={{ fontFamily: 'Satoshi'}}>The terms and services which apply to you, will depend on your country of residence. </Text>
                	</View>
                	<View className='mt-12 px-2 py-2 '>
                    	<View className='w-full bg-[#EDEFF2] px-5 py-2 rounded-2xl flex flex-row justify-between items-center'>
                			<View className='flex flex-col space-y-1'>
                    		    <Text className='text-[#737B87] text-[12px]'>Country</Text>
                    		    <Text className='text-[14px]'>United Kingdom</Text>
                			</View>
                			<MaterialIcons className='' name='expand-more' size={24} color="black"/>
                    	</View>
                	</View>
                </View> 
			}
			{
				state.name &&
                <View className='top-0 flex flex-col pt-1 px-4'>
                	<StatusBar  backgroundColor='#F6F7F6' />
                	<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4'>
                    	<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
                	</TouchableHighlight>
                	<View className='flex flex-row justify-between pr-3 items-center'>
                		<Text className="text-black text-[34px] font-bold" style={{ fontFamily: 'Satoshi'}} >Name as in ID</Text>
                		<Image className='w-[40px] h-[55px]' source={require('../../assets/images/id.png')} />
                	</View>
                	<View className='mt-3 px-[1px] pr-4'>
                    	<Text className="text-[13px] text-[#737B87]" style={{ fontFamily: 'Satoshi'}}> Name as in your official documents. </Text>
                	</View>
                	<View className='mt-12 px-2 py-2 flex flex-row space-x-2 items-center '>
                    	<View className='w-full h-[55px] bg-[#EDEFF2] px-4 py-4 rounded-2xl flex flex-row items-center justify-left space-x-3'>
                			<Text className='text-[16px] text-gray-500'>First name</Text>
                		</View>
                	</View>
                	<View className='mt-6 px-2 py-2 flex flex-row space-x-2 items-center '>
                    	<View className='w-full h-[55px] bg-[#EDEFF2] px-4 py-4 rounded-2xl flex flex-row items-center justify-left space-x-3'>
                			<Text className='text-[16px] text-gray-500'>Last name</Text>
                		</View>
                	</View>
                </View> 
			}
			{
				state.dob &&
                <View className='top-0 flex flex-col pt-1 px-4'>
                	<StatusBar  backgroundColor='#F6F7F6' />
                	<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4'>
                    	<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
                	</TouchableHighlight>
                	<View className='flex flex-row justify-between pr-3 items-center'>
                		<Text className="text-black text-[34px] font-bold" style={{ fontFamily: 'Satoshi'}} >Date of birth</Text>
                		<Image className='w-[40px] h-[42px]' source={require('../../assets/images/calender.png')} />
                	</View>
                	<View className='mt-3 px-[1px] pr-4'>
                    	<Text className="text-[13px] text-[#737B87]" style={{ fontFamily: 'Satoshi'}}> Name as in your official documents. </Text>
                	</View>
                	<View className='mt-12 px-2 py-2 flex flex-row space-x-2 items-center '>
                    	<View className='w-full h-[55px] bg-[#EDEFF2] px-4 py-4 rounded-2xl flex flex-row items-center justify-left space-x-3'>
                			<Text className='text-[16px] text-gray-500'>DD/MM/YYYY</Text>
                		</View>
                	</View>
                </View> 
			}
			{
				state.address &&
                <View className='top-0 flex flex-col pt-1 px-4'>
                	<StatusBar  backgroundColor='#F6F7F6' />
                	<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4'>
                    	<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
                	</TouchableHighlight>
                	<Text className="text-black text-[34px] font-bold" style={{ fontFamily: 'Satoshi'}} >Home address</Text>
                	<View className='mt-3 px-[1px] pr-4'>
                    	<Text className="text-[13px] text-[#737B87]" style={{ fontFamily: 'Satoshi'}}>By law, we need your home address to open your account. </Text>
                	</View>
                	<View className='mt-12 py-2 flex flex-row space-x-2 items-center '>
                		<View className='w-full h-[55px] bg-[#EDEFF2] px-4 py-4 rounded-2xl flex flex-row items-center justify-between space-x-3'>
                			<Text className='text-[16px] text-gray-500'>Search</Text>
                			<IonIcons name="search" size={22} color="gray"/>
                		</View>
                	</View>
                </View> 
			}
			{
				state.email &&
                <View className='top-0 flex flex-col pt-1 px-4'>
                	<StatusBar  backgroundColor='#F6F7F6' />
                	<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4'>
                    	<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
                	</TouchableHighlight>
                	<Text className="text-black text-[34px] font-bold" style={{ fontFamily: 'Satoshi'}} >Email</Text>
                	<View className='mt-12 px-2 py-2 flex flex-row space-x-2 items-center '>
                    	<View className='w-full h-[55px] bg-[#EDEFF2] px-4 py-4 rounded-2xl flex flex-row items-center justify-left space-x-3'>
                			<Text className='text-[16px] text-gray-500'>Email address</Text>
                		</View>
                	</View>
                	<View className='mt-8 px-3 pr-4 flex flex-row space-x-8 items-start'>
                		<IonIcons name="checkbox" size={22} color="#2C64E3"/>
                		<View className='w-3/4'>
                    		<Text className="text-[15px] font-semibold">Keep me up to date about personalized Flex offers, products and services. </Text>
                		</View>
                	</View>
                </View> 
			}
			<View className='px-4 py-6'>
				<View className='flex flex-col mt-6'>
					<TouchableHighlight onPress={next} underlayColor='#2F2F2F' className='px-2 rounded-2xl bg-black'>
						<View className='h-[55px] rounded-2xl flex flex-col justify-center items-center'>
							<Text className='text-[19px] text-white' >{state.email ? 'Submit': 'Next'}</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}
  
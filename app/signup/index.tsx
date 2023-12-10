/* eslint-disable no-mixed-spaces-and-tabs */
import { View, Text, TouchableHighlight, StatusBar, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';

export default function ModalScreen() {

	const [otpActive, setOtpActive] = React.useState(false);

	const back = () => {
		router.push('..');
	};

	const next = () => {
		if(!otpActive){
			setOtpActive(true);
		}else{
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			router.push('/kyc');
		}
	};

	return (
		<View className='h-full bg-[#F6F7F6] flex flex-col justify-between mt-4' >
			{
				!otpActive &&
                <View className='top-0 flex flex-col pt-1 px-4'>
                	<StatusBar  backgroundColor='#F6F7F6' />
                	<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4'>
                    	<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
                	</TouchableHighlight>
                	<Text className="text-black text-[34px] font-bold" style={{ fontFamily: 'Satoshi'}} >Let&apos;s get started!</Text>
                	<View className='mt-3 px-[1px] pr-4'>
                    	<Text className="text-[13px] text-[#737B87]" style={{ fontFamily: 'Satoshi'}}>Enter your phone number. We will send you a confirmation code there. </Text>
                	</View>
                	<View className='mt-12 px-2 py-2 flex flex-row space-x-3 '>
                    	<View className='w-1/3 h-[60px] bg-[#EDEFF2] px-4 py-4 rounded-2xl flex flex-row items-center justify-center space-x-3'>
                    		<Image className='w-[30px] h-[30px] rounded-full' source={require('../../assets/images/uk.png')} />
                    		<Text className='text-[16px] font-medium'>+44</Text>
                    	</View>
                    	<View className='w-2/3 bg-[#E0E2E6] px-5 py-4 rounded-2xl flex flex-col justify-center'>
                    		<Text className='text-[#737B87] text-[16px]'>Mobile number</Text>
                    	</View>
                	</View>
                </View> 
			}
			{
				otpActive &&
                <View className='top-0 flex flex-col pt-1 px-4'>
                	<StatusBar  backgroundColor='#F6F7F6' />
                	<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4'>
                    	<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
                	</TouchableHighlight>
                	<Text className="text-black text-[34px] font-bold" style={{ fontFamily: 'Satoshi'}} >6-digit code</Text>
                	<View className='mt-3 px-[1px] pr-4'>
                    	<Text className="text-[13px] text-[#737B87]" style={{ fontFamily: 'Satoshi'}}> Code sent to +44 7045623561. </Text>
                	</View>
                	<View className='mt-12 px-2 py-2 flex flex-row space-x-2 items-center '>
                    	<View className='w-[45px] h-[55px] bg-[#E0E2E6] px-4 py-4 rounded-2xl flex flex-row items-center justify-center space-x-3'/>
                    	<View className='w-[45px] h-[55px] bg-[#E0E2E6] px-4 py-4 rounded-2xl flex flex-row items-center justify-center space-x-3'/>
                    	<View className='w-[45px] h-[55px] bg-[#E0E2E6] px-4 py-4 rounded-2xl flex flex-row items-center justify-center space-x-3'/>
                		<Text className='text-[30px]'>-</Text>
                    	<View className='w-[45px] h-[55px] bg-[#E0E2E6] px-4 py-4 rounded-2xl flex flex-row items-center justify-center space-x-3'/>
                    	<View className='w-[45px] h-[55px] bg-[#E0E2E6] px-4 py-4 rounded-2xl flex flex-row items-center justify-center space-x-3'/>
                    	<View className='w-[45px] h-[55px] bg-[#E0E2E6] px-4 py-4 rounded-2xl flex flex-row items-center justify-center space-x-3'/>
                	</View>
                </View> 
			}
			<View className='px-4 py-6'>
				<View className='flex flex-col mt-6'>
					<TouchableHighlight onPress={next} underlayColor='#2F2F2F' className='px-2 rounded-2xl bg-black'>
						<View className='h-[55px] rounded-2xl flex flex-col justify-center items-center'>
							<Text className='text-[19px] text-white' >{otpActive ? 'Submit' : 'Next'}</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	);
}
  
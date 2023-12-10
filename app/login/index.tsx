/* eslint-disable @typescript-eslint/ban-ts-comment */
import { View, Text, StatusBar, Image, TouchableHighlight, useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { router } from 'expo-router';
import * as LocalAuthentication from 'expo-local-authentication';

async function getItem(key: string) {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return value;
		} else {
			return null;
		}
	} catch (error) {
		console.error('Error retrieving data:', error);
		return null;
	}
} 

const Login = () => {

	const [val, setVal] = React.useState<null | string>(null);
	const {height, width} = useWindowDimensions();



	React.useEffect(() => {
		const init = async () => {
			const value = await getItem('flexapp');
			console.log(value);
			setVal(value);
			if(value !== null){
				getStarted(value);
			}
		};
		init();
	}, []);

	const getStarted = async (value: string | null) => {

			try{
				const bio = await LocalAuthentication.authenticateAsync({promptMessage: 'Unlock Flex'});
				//@ts-ignore
				if(bio.success) router.push('/wallet/(tabs)/home');				
			}catch(e){
				console.log('Authentication error is => ',e);
			}
	};

	return (
		<View style={{flex: 1, backgroundColor:'#151417'}}>
			<View className='justify-center items-center h-[45vh] mt-[46px]'>
				<Image className='w-full absolute top-0' style={{height: height/2.3}} source={require('../../assets/images/back.jpg')} />
			</View>
			<View className='flex-1'>
				<View className='h-3/8 pt-[3vh] pb-[2vh] px-6 space-y-4 '>
					<View className='flex-row items-center space-x-10'>
						<Text className='text-white font-sans' style={{ fontFamily: 'Satoshi', fontSize: width/10}}> Step into</Text>
						<Image className='w-[40px] h-[40px] mt-2' source={require('../../assets/images/star.png')} />
					</View>
					<Text className='text-white font-sans' style={{ fontFamily: 'Satoshi', fontSize: width/10}}> future of digital</Text>
					<Text className='text-white font-sans' style={{ fontFamily: 'Satoshi', fontSize: width/10}}> Wallet</Text>
				</View>
				<View className='flex h-1/3 flex-col justify-center'>
					<View className='mx-8 h-[60px] rounded-xl bg-[#B2E0B8]'>
						<TouchableHighlight onPress={getStarted} underlayColor="#d1ecd4" className='h-full rounded-xl'>
							<View className='flex-1 justify-center items-center'>
								<Text className='text-black text-[15px] font-semibold'> Get Started</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		</View>

	);
};

export default Login;
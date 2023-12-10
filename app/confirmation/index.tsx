/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-mixed-spaces-and-tabs */
import { View, StatusBar } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useLocalSearchParams } from 'expo-router';

import axios from 'axios';

const url = 'http://172.20.10.2:8080';


export default function Confirmation() {

	const { method, value } = useLocalSearchParams();
	const [loading, setLoading] = React.useState(true);



	function delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}  

	const init = async () => {
		if(method === 'add'){
			const amount = value;
			const address = '0x21BA1dB8407F373bb7638dFbAD3a70868D0afdBE';
			const resp = await axios.post(`${url}/balance/add`, {address, amount});
			console.log(resp);
			await delay(1200);
			setLoading(false);
		}
		if(method === 'send'){
			const amount = value;
			const address = '0x';
			// const resp = await axios.post(`${url}/balance/add`, {address, amount});
			await delay(1500);
			setLoading(false);
		}
	};



	React.useEffect(() => {
		init();
	},[]);

	const finish = () => {
		//@ts-ignore
		router.push('/wallet/(tabs)/home');
	};

	const animation = React.useRef(null);


	return (
		<View className='h-full bg-[#EEEFEF] flex flex-col justify-center items-center' >
			<StatusBar backgroundColor='#EEEFEF' />
			{
				loading && 
                <LottieView
                	autoPlay
                	loop={true}
                	ref={animation}
                	style={{
                		width: 200,
                		height: 200,
                		backgroundColor: '#eee',
                	}}
                	// Find more Lottie files at https://lottiefiles.com/featured
                	source={require('../../assets/lottie/loading.json')}
                />
			}
			{
				!loading &&
                <LottieView
                	autoPlay
                	ref={animation}
                	loop={false}
                	onAnimationFinish={finish}
                	style={{
                		width: 200,
                		height: 200,
                		backgroundColor: '#eee',
                	}}
                	// Find more Lottie files at https://lottiefiles.com/featured
                	source={require('../../assets/lottie/confirm.json')}
                />
			}
		</View>
	);
}
  
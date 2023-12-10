import { Redirect } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';
import { useAppDispatch } from '../redux/hooks';
import { setBalance } from '../redux/features/balanceSlice';


const url = 'http://172.20.10.2:8080/';
const websocketApi = 'ws://172.20.10.2:8080';
SplashScreen.preventAutoHideAsync();

// eslint-disable-next-line react/display-name
export default () => {
	
	const [fontsLoaded] = useFonts({
		Excon: require('../assets/fonts/Excon-Bold.ttf'),
		Satoshi: require('../assets/fonts/Satoshi-Bold.ttf'),
		GeneralSans: require('../assets/fonts/GeneralSans-Semibold.ttf'),
	});

	const dispatch = useAppDispatch();

	const init = async () => {
		const address = '0x21BA1dB8407F373bb7638dFbAD3a70868D0afdBE';
		// const resp = await axios.post(`${url}/balance`,{add});
		const resp = await axios.post(`${url}balance`, {address});
		dispatch(setBalance(resp.data.data.balance));
		const ws = new WebSocket(`${websocketApi}/balance`);
		ws.onopen = () => {
			console.log('connection established');
			ws.send(JSON.stringify({ address }));
			ws.onmessage = (event) => {
				const response =  event.data;
				console.log(response);
				dispatch(setBalance(response));
			};
			ws.onclose = () => {
				console.log('Connection closed');
				setTimeout(init, 5000);
			};
		};
	};
	React.useEffect(() => {
		init();
	}, []);


	if (fontsLoaded) {
		SplashScreen.hideAsync();
		return (
			<Redirect href='/login/' />
		); 
	}
	


};

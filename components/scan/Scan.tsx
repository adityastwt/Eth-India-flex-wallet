/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Camera} from 'expo-camera';
import { useWindowDimensions } from 'react-native';
import { StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function App({pair}: any) {
	const [hasPermission, setHasPermission] = useState<null | boolean>(null);
	const [scanned, setScanned] = useState(false);
	const {width} = useWindowDimensions();
	const height = Math.round((1.3 * width * 16) / 9);
	const router = useRouter();

	const back = () => {
		router.push('..');
	};


	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const handleBarCodeScanned = async ({ data }: any) => {
		setScanned(true);
		console.log(data);
		if(data.slice(0,2) === 'wc'){
			await pair(`${data}`);
			//@ts-ignore
			router.push('/wallet/(tabs)/home');
		}
	};

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return (
			<View style={styles.container}>
				<Text>Camera permission not granted</Text>
			</View>
		);
	}

	return (
		<View className='flex-1 justify-center items-center bg-[#F9F8F9] mt-4 w-full'>
		<View className='flex-1 w-full h-full relative'>
			<View className='w-full overflow-y-clip z-0 absolute top-0 '>
				<Camera
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					ratio="16:9"
					zoom={0.0}
					style={{
						height: height,
						width: '130%',
						zIndex: 0
					}}
				/>
			</View>
			<SafeAreaView className='z-5 flex-1 bg-transparent px-6 justify-between pb-10'>
				<View className='flex flex-row justify-between items-center'>
					<TouchableHighlight underlayColor='transparent' onPress={() => {router.push('..')}} className='px-4 top-0'>
						<MaterialIcons className='' name='keyboard-backspace' size={26} color="white"/>
					</TouchableHighlight>
					<TouchableHighlight underlayColor='transparent' className='px-4 top-0'>
						<MaterialIcons className='' name='flash-off' size={26} color="white"/>
					</TouchableHighlight>
				</View>
				<View className='items-center'>
					<View className='h-[260px] w-[260px] border-2 border-white bg-transparent rounded-xl' />
					<View className='mt-7 flex flex-row justify-center '>
						<View className='px-3 py-2 bg-[#454447] bg-opacity-10 flex flex-row space-x-2 rounded-2xl items-center'>
							<Text className="text-[14px] text-white font-medium">Scan code to pay</Text>
						</View>
					</View>
				</View>
				<View className='flex flex-row justify-center '>
					<View className='bg-[#454447] bg-opacity-10 flex flex-row rounded-2xl items-center '>
						<View className='bg-[#938F94] rounded-xl px-5 py-3'>
							<Text className="text-[14px] text-white font-medium">Scan</Text>
						</View>
						<View className='px-5 py-3'>
							<Text className="text-[13px] text-gray-400 font-medium">My Code</Text>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</View>
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

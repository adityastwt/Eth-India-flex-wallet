/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Numpad = ({num, setNum}: {num: string; setNum: any}) => {

	const handleDecimal = () => {
		const newNum = num + '.';
		if ((newNum.match(/\./g) || []).length > 1) {
			return;
		}
		setNum(newNum);
	};

	return (
		<View className='flex-1 h-full py-3 mt-2 mx-3'>
			<View className='flex-row justify-between items-center h-1/4'>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '1');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>1</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '2');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>2</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '3');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>3</Text>
				</TouchableHighlight>
			</View>
			<View className='flex-row justify-between items-center h-1/4'>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '4');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>4</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '5');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>5</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '6');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>6</Text>
				</TouchableHighlight>
			</View>
			<View className='flex-row justify-between items-center h-1/4'>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '7');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>7</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '8');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>8</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '9');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>9</Text>
				</TouchableHighlight>
			</View>
			<View className='flex-row justify-between items-center h-1/4'>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={handleDecimal}className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>.</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num + '0');}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Text className='text-[25px] font-bold' style={{ fontFamily: 'Satoshi'}}>0</Text>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="#e0dfe0" onPress={() => {setNum(num.slice(0,-1));}} className='w-1/3 flex-1 h-full justify-center items-center rounded-xl'>
					<Ionicons className='' name='backspace-outline' size={30} color="black"/>
				</TouchableHighlight>
			</View>
		</View>
	);
};

export default Numpad;
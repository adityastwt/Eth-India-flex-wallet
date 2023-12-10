/* eslint-disable @typescript-eslint/ban-ts-comment */
import { View, Text, TouchableHighlight, StatusBar, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';
// import Modal from 'react-native-modal';
import { useLocalSearchParams } from 'expo-router';
import Numpad from '../../../components/common/Numpad';
import { useAppSelector } from  '../../../redux/hooks';

export default function ModalScreen() {

	const { image, name } = useLocalSearchParams();
	const [num, setNum] = React.useState('');

	const balance = useAppSelector((state) => state.balanceSlice);

	const back = () => {
		//@ts-ignore
		router.push('/wallet/(tabs)/transfer');
	};

	const transfer = () => {
		const method = 'send';
		const value = num;
		//@ts-ignore
		router.push({ pathname: '/confirmation', params: { method, value } });
	};

	return (
		<View className='h-full bg-[#F9F8F9] flex-1 mt-4' >
			<StatusBar backgroundColor='#F6F7F6' />
			<View className='flex flex-col  justify-center px-4'>
				<View className='h-[50vh]'>
					<View className='h-1/6 pt-1 flex flex-row justify-between items-center'>
						<TouchableHighlight underlayColor='transparent' onPress={back} className=''>
							<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
						</TouchableHighlight>
						<Text style={{ fontFamily: 'Satoshi'}} className='text-[22px] mr-8 font-bold'>Transfer</Text>
						<View></View>
					</View>
					<View className='h-2/6 flex flex-row justify-center mt-3'>
						<View className='flex flex-col space-y-2 items-center'>
							{image === '1' &&	<Image source={require('../../../assets/images/avatar1.jpeg')} className='w-[80px] h-[80px] rounded-full'></Image> }
							{image === '2' &&	<Image source={require('../../../assets/images/avatar2.jpg')} className='w-[80px] h-[80px] rounded-full'></Image> }
							{image === '3' &&	<Image source={require('../../../assets/images/avatar3.jpg')} className='w-[80px] h-[80px] rounded-full'></Image> }
							<Text className='text-gray-700 text-[17px]'>{name}</Text>
						</View>	
					</View>
					<View className='h-3/6 pb-4 justify-between'>
						<View className='h-[90px] w-full bg-[#E0E3E7] rounded-2xl flex flex-row justify-between px-5 py-2 items-center'>
							<View className='flex flex-row space-x-4 h-full items-center'>
								<View className='flex flex-col space-y-2'>
									<View className='flex flex-row space-x-3 items-center'>
										<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[24px]'>GBP</Text>
										<MaterialIcons className='' name='expand-more' size={28} />
									</View>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Balance: £{balance.Balance}</Text>
								</View>
							</View>
							<View className='mb-3'>
								<Text style={{ fontFamily: 'Satoshi'}} className='font-medium text-[19px] text-[#737A87]'>+£ {num.length === 0 ? '0' : num}</Text>
							</View>
						</View>
						<View className='flex flex-col justify-center rounded-2xl space-y-3 px-2'>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[#737A87] font-bold'>From</Text>
							<View className='h-max flex flex-row space-x-7 items-center'>
								<Image className='w-[50px] h-[40px]' source={require('../../../assets/images/card1.png')} />
								<View className='h-full flex flex-col space-y-1'>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[16px] font-bold'>Mastercard</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727A87]'>45xx xxxx xxxx xx18</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View className='h-[50vh]'>
					<View className='h-4/5 py-2 translate-y-6'>
						<Numpad num={num} setNum={setNum} />
					</View>
					<View className='h-1/5 flex flex-col mt-6'>
						<TouchableHighlight onPress={transfer} underlayColor='#2F2F2F' className='px-2 rounded-2xl bg-black'>
							<View className='h-[55px] rounded-2xl flex flex-col justify-center items-center'>
								<Text className='text-[17px] text-white' >Confirm</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		</View>
	);
}
  
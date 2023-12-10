/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Numpad from '../common/Numpad';
import { useRouter } from 'expo-router';


const DebitCardDrawer = () => {

	const router = useRouter();

	const [selectedCard, setSelectedCard] = React.useState(false);
	const [num, setNum] = React.useState('');
	// ref
	const bottomSheetRef = useRef<BottomSheet>(null);

	const back = () => {
		setSelectedCard(false);
		setNum('0');
	};

	const add = async () => {
		bottomSheetRef.current!.close();
		//@ts-ignore
		const method = 'add';
		const value = num;
		//@ts-ignore
		router.push({ pathname: '/confirmation', params: { method, value } });
	};
 
	// renders
	return (
		<View style={styles.container} >
			<BottomSheet
				ref={bottomSheetRef}
				index={0}
				snapPoints={['95%']}
			>
				{
					!selectedCard &&
					<View className='flex flex-col mt-2 mx-5'>
						<Text className="text-black text-[30px] font-bold" style={{ fontFamily: 'Satoshi'}} >Add Money</Text>
						<View className='mt-12 flex flex-row justify-between'>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[#737A87] font-bold'>Use saved cards</Text>
						</View>
						<TouchableHighlight onPress={() => {setSelectedCard(true);}} underlayColor='#F9F8F9' className='h-[100px] px-3 my-4 rounded-2xl' >
							<View className='h-full flex flex-col justify-center rounded-2xl'>
								<View className='h-max flex flex-row space-x-7 items-center'>
									<Image className='w-[50px] h-[40px]' source={require('../../assets/images/card1.png')} />
									<View className='h-full flex flex-col space-y-1'>
										<Text style={{ fontFamily: 'Satoshi'}} className='text-[16px] font-bold'>Mastercard</Text>
										<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727A87]'>45xx xxxx xxxx xx18</Text>
									</View>
								</View>
							</View>
						</TouchableHighlight>
						<View className='mt-4 flex flex-row justify-between'>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[#737A87] font-bold'>Other options</Text>
						</View>
						<TouchableHighlight onPress={() => {setSelectedCard(true);}} underlayColor='#F9F8F9' className='h-[100px] px-3 my-4 rounded-2xl' >
							<View className='h-full flex flex-col justify-center rounded-2xl'>
								<View className='h-max flex flex-row space-x-7 items-center'>
									<Image className='w-[50px] h-[40px]' source={require('../../assets/images/card2.png')} />
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[16px] font-bold'>Add new card</Text>
								</View>
							</View>
						</TouchableHighlight>
					</View>
				}
				{
					selectedCard && 
					<View className='flex flex-col  justify-center px-4'>
						<View className='h-[40vh]'>
							<View className='h-1/4 pt-1'>
								<TouchableHighlight underlayColor='transparent' onPress={back} className='py-4 '>
									<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
								</TouchableHighlight>
								{/* <View className='flex flex-row space-x-3 items-center '>
									<FontAwesome className='' name='shield' size={14} color="#2C65E2"/>
									<Text className="text-[14px] text-[#2C65E2] font-bold" style={{ fontFamily: 'Satoshi'}} >Your money is fully in your control. </Text>
								</View> */}
							</View>
							<View className='h-3/4 py-5 justify-between'>
								<View className='h-[90px] w-full bg-[#E0E3E7] rounded-2xl flex flex-row justify-between px-5 py-2 items-center'>
									<View className='flex flex-row space-x-4 h-full items-center'>
										<View className='flex flex-col space-y-2'>
											<View className='flex flex-row space-x-3 items-center'>
												<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[24px]'>GBP</Text>
												<MaterialIcons className='' name='expand-more' size={28} />
											</View>
											<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Balance: £0</Text>
										</View>
									</View>
									<View className='mb-3'>
										<Text style={{ fontFamily: 'Satoshi'}} className='font-medium text-[19px] text-[#737A87]'>+£ {num.length === 0 ? '0' : num}</Text>
									</View>
								</View>
								<View className='flex flex-col justify-center rounded-2xl space-y-3'>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[#737A87] font-bold'>From</Text>
									<View className='h-max flex flex-row space-x-7 items-center'>
										<Image className='w-[50px] h-[40px]' source={require('../../assets/images/card1.png')} />
										<View className='h-full flex flex-col space-y-1'>
											<Text style={{ fontFamily: 'Satoshi'}} className='text-[16px] font-bold'>Mastercard</Text>
											<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727A87]'>45xx xxxx xxxx xx18</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View className='h-[60vh]'>
							<View className='h-2/3 py-2 translate-y-6'>
								<Numpad num={num} setNum={setNum} />
							</View>
							<View className='h-1/3 flex flex-col mt-6'>
								<TouchableHighlight onPress={add} underlayColor='#2F2F2F' className='px-2 rounded-2xl bg-black'>
									<View className='h-[55px] rounded-2xl flex flex-col justify-center items-center'>
										<Text className='text-[17px] text-white' >Confirm</Text>
									</View>
								</TouchableHighlight>
							</View>
						</View>
					</View>
				}
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 48,
		backgroundColor: 'transparent',
		zIndex: 20
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		height: 'auto'
	},
});

export default DebitCardDrawer;


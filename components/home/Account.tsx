import * as React from 'react';
import { View, Text, Image, ScrollView, useWindowDimensions, TouchableHighlight } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { router } from 'expo-router';
import { useAppSelector } from  '../../redux/hooks';

function Account() {
	const height = useWindowDimensions().height;
	const balance = useAppSelector((state) => state.balanceSlice);

	const add = () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore 
		router.push('/wallet/add');
	};


	return (
		<ScrollView showsVerticalScrollIndicator={false} className='mb-3'>
			<View style={{height: height/2 - 40}} className={'pt-3 pb-2 px-5'}>
				<View className='bg-[#FFFEFE] px-6 py-5 h-full w-full rounded-3xl flex flex-col'>
					<View className='h-1/4 flex flex-row justify-between'>
						<View className='h-full flex flex-col space-y-1'>
							<View className='flex flex-row space-x-5 items-center'>
								<Text style={{ fontFamily: 'Satoshi'}} className='text-[32px] font-extrabold'>£ {balance.Balance}</Text>
								<View className='h-[24px] mt-1 w-[24px] bg-[#E8EFFC] rounded-full flex flex-col justify-center items-center'>
									<MaterialIcons className='' name='expand-more' size={24} color="#2C65E2"/>
								</View>
							</View>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[14px] font-semibold'>British Pound</Text>
						</View>
						<View>
							<Image className='w-[40px] h-[40px] rounded-full' source={require('../../assets/images/uk.png')} />
						</View>
					</View>
					<View className='h-1/3 mt-6 flex flex-row justify-between px-3'>
						<TouchableHighlight className='z-10' onPress={add} underlayColor='#FFFEFE'> 
							<View className='flex flex-col items-center space-y-2'>
								<View className='h-[50px] w-[50px] bg-[#E8EFFC] rounded-full flex flex-col justify-center items-center'>
									<MaterialIcons className='' name='add' size={24} color="#2C65E2"/>
								</View>
								<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#2C65E2] font-bold'>Add Money</Text>
							</View>
						</TouchableHighlight>
						<View className='flex flex-col items-center space-y-2'>
							<View className='h-[50px] w-[50px] bg-[#E8EFFC] rounded-full flex flex-col justify-center items-center'>
								<MaterialIcons className='' name='360' size={24} color="#2C65E2"/>
							</View>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#2C65E2] font-bold'>Exchange</Text>
						</View>
						<View className='flex flex-col items-center space-y-2'>
							<View className='h-[50px] w-[50px] bg-[#E8EFFC] rounded-full flex flex-col justify-center items-center'>
								<MaterialIcons className='' name='more-horiz' size={24} color="#2C65E2"/>
							</View>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#2C65E2] font-bold'>More</Text>
						</View>
					</View>
					<View className='mt-3 flex flex-row justify-between'>
						<Text style={{ fontFamily: 'Satoshi'}} className='text-[#737A87] font-bold'>Transactions</Text>
						<MaterialIcons className='' name='more-horiz' size={18} color="#737A87"/>
					</View>
					<View className='h-1/3 flex flex-col justify-center'>
						<View className='h-max flex flex-row space-x-7 items-center'>
							<AntDesign className='' name='clockcircle' size={20} color="#BCC4CC"/>	
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[16px] text-[#BCC4CC]'>No Transactions yet</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default Account;

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Upgrade from '../common/Upgrade';

const AccountInfo = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View className='flex flex-row justify-between items-top pt-1'>
				<View className='flex flex-col '>
					<Text className="text-black text-[32px] font-bold" style={{ fontFamily: 'GeneralSans'}} >Dolly</Text>
					<Text className="text-black text-[32px] font-bold" style={{ fontFamily: 'GeneralSans'}} >Sheep</Text>
					<View className='flex flex-row space-x-3 items-center mt-2'>
						<Text className="text-[14px] text-[#2C65E2] font-medium" >@dollysheep</Text>
					</View>
				</View>
				<View>
					<View className='w-[57px] h-[57px] rounded-full bg-[#777E88] flex flex-col justify-center items-center'>
						<Text style={{ fontFamily: 'Satoshi'}} className='text-[20px] font-medium text-white'>DS</Text>
					</View>
				</View>

			</View>
			<View className='mt-4 flex flex-row space-x-3 items-center'>
				<View className='px-3 py-2 bg-blue-500 flex flex-row space-x-1 rounded-2xl items-center'>
					<MaterialIcons className='' name='upgrade' size={16} color='white'/>
					<Text className="text-[14px] text-white font-medium">Upgrade</Text>
				</View>
				<View className='px-3 py-2 bg-blue-200 flex flex-row space-x-2 rounded-2xl items-center'>
					<MaterialCommunityIcons className='' name='heart' size={16} color='#2C65E2'/>
					<Text className="text-[14px] text-[#2C65E2] font-medium">Invite friends</Text>
				</View>
			</View>
			<View className='mt-5'>
				<Upgrade />
			</View>
			<View className='mt-4 bg-[#FFFEFE] h-[60px] rounded-xl flex flex-row items-center space-x-4 px-4'>
				<MaterialIcons className='' name='help' size={24} color="#2C65E2"/>
				<Text className='text-[17px] font-medium'  style={{ fontFamily: 'Satoshi'}}>Help</Text>
			</View>
			<View className='flex flex-row justify-between mt-5 items-center px-2'>
				<Text className='text-[17px] font-medium'  style={{ fontFamily: 'Satoshi'}}>Account details</Text>
				<Text className="text-[14px] text-[#2C65E2] font-medium">See all</Text>
			</View>
			<View className='mt-4 bg-[#FFFEFE] py-4 rounded-xl flex flex-col space-y-6 px-4'>
				<View className='flex flex-row justify-between items-center'>
					<Text className='text-[14px] font-medium text-gray-500'  style={{ fontFamily: 'Satoshi'}}>Name</Text>
					<Text className='text-[14px] text-[#2C65E2] font-medium'  style={{ fontFamily: 'Satoshi'}}>Personal - GBP</Text>
				</View>
				<View className='flex flex-row justify-between items-center'>
					<Text className='text-[14px] font-medium text-gray-500'  style={{ fontFamily: 'Satoshi'}}>IBAN</Text>
					<Text className='text-[12px] text-[#2C65E2] font-medium'  style={{ fontFamily: 'Satoshi'}}>GB35 FLEX 0039 7063 4597 17</Text>
				</View>
				<View className='flex flex-row justify-between items-center'>
					<Text className='text-[14px] font-medium text-gray-500'  style={{ fontFamily: 'Satoshi'}}>Address</Text>
					<Text className='text-[12px] text-[#2C65E2] font-medium'  style={{ fontFamily: 'Satoshi'}}>0x56C1c.....12272C</Text>
				</View>
			</View>
			<View className='mt-4 bg-[#FFFEFE] py-4 rounded-xl flex flex-col space-y-8 px-4 mb-6'>
				<View className='flex flex-row space-x-6 items-center'>
					<MaterialCommunityIcons className='' name='diamond' size={24} color="#2C65E2"/>
					<Text className='text-[16px] font-medium text-gray-700 '  style={{ fontFamily: 'Satoshi'}}>Plan</Text>
				</View>
				<View className='flex flex-row space-x-6 items-center'>
					<MaterialCommunityIcons className='' name='account' size={24} color="#2C65E2"/>
					<Text className='text-[16px] font-medium text-gray-700'  style={{ fontFamily: 'Satoshi'}}>Account</Text>
				</View>
				<View className='flex flex-row space-x-5 items-center'>
					<MaterialCommunityIcons className='' name='security' size={24} color="#2C65E2"/>
					<Text className='text-[16px] font-medium text-gray-700 '  style={{ fontFamily: 'Satoshi'}}>Security & privacy</Text>
				</View>
				<View className='flex flex-row space-x-5 items-center'>
					<Ionicons className='' name='settings' size={24} color="#2C65E2"/>
					<Text className='text-[16px] font-medium text-gray-700 '  style={{ fontFamily: 'Satoshi'}}>App settings</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default AccountInfo;
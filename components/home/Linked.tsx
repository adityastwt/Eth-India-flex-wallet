import { View, Text, Pressable, TouchableHighlight, Image, useWindowDimensions, Switch, ScrollView } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


function Linked() {

	const {height, width} = useWindowDimensions();
    const [debitCardMode, setDebitCardMode] = React.useState(false);
    const toggleSwitch = () => setDebitCardMode(previousState => !previousState);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
            <View className={'pt-3 pb-2 px-5'} style={{height: height/2.2}}>
                <View className='bg-[#FFFEFE] px-6 py-5 h-full w-full rounded-3xl flex flex-col'>
                    <View className='h-[20%] flex flex-row justify-between'>
                        <Text style={{ fontFamily: 'Satoshi'}} className='text-[17px] font-semibold'>Active devices</Text>
                    </View>
					<View className='h-[40%] flex flex-col justify-between'>
						<View className='h-max flex flex-row space-x-7 items-center'>
                            <AntDesign className='' name='mobile1' size={32} color="#2C65E2"/>
							<View className='h-full flex flex-col space-y-1'>
								<Text style={{ fontFamily: 'Satoshi'}} className='text-[16px] font-bold'>This device (IOS 17)</Text>
                                <View className='flex flex-row items-center space-x-2'>
								    <Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-green-500'>●</Text>
								    <Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727A87]'>Active Now</Text>
                                </View>
							</View>						
						</View>
						<View className='h-max flex flex-row space-x-7 items-center'>
                            <AntDesign className='' name='laptop' size={32} color="#2C65E2"/>
							<View className='h-full flex flex-col space-y-1'>
								<Text style={{ fontFamily: 'Satoshi'}} className='text-[16px] font-bold'>Macbook Pro (MACOS 13)</Text>
                                <View className='flex flex-row items-center space-x-2'>
								    <Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-green-500'>●</Text>
								    <Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727A87]'>Active Now</Text>
                                </View>
							</View>						
						</View>
					</View> 
                    <View className='flex h-[40%] mt-6 flex-col justify-center items-center'>
                        <Pressable onPress={() => {router.push({pathname: '/wallet/mobile'})}} className='px-6 py-4 bg-[#E8EFFC] rounded-3xl'>
                            <Text style={{fontSize: width/26, color:'#2C65E2'}} >Link new device</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
			<View className='mt-4 px-5 flex flex-col space-y-4 '>
				<View className='h-[150px] w-full bg-[#FFFEFE] rounded-2xl px-5 pt-4 flex flex-col space-y-6'>
					<View className='flex flex-row justify-between items-center'>
						<View className='flex flex-row space-x-4 h-full items-center'>
							<Image className='w-[50px] h-[50px] ' source={require('../../assets/images/shopping.png')} />
							<View className='flex flex-col space-y-1 w-max '>
								<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[17px]'>Pay with one click</Text>
								<Text style={{ fontFamily: 'Satoshi'}} className='text-[14px] text-[#727A87]'>Shop instantly with just a click </Text>
							</View>
						</View>
					</View>
					<View className='h-[45px] w-full bg-[#E8EFFC] rounded-2xl flex flex-col justify-center items-center'>
						<Text style={{ fontFamily: 'Satoshi'}} className='text-[15px] text-[#2C65E2] font-bold'>Set up now</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default Linked;
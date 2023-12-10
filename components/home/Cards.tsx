import { View, Text, Pressable, TouchableHighlight, Image, useWindowDimensions, Switch, ScrollView } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


function Cards() {

	const {height, width} = useWindowDimensions();
    const [debitCardMode, setDebitCardMode] = React.useState(false);
    const toggleSwitch = () => setDebitCardMode(previousState => !previousState);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
    <View className={'pt-3 pb-2 px-5'} style={{height: height/2.2}}>
                <View className='bg-[#FFFEFE] px-6 py-5 h-full w-full rounded-3xl flex flex-co space-y-3 '>
                    <View className='h-[12%] flex flex-row items-center justify-center space-x-6'>
                        <View>
                            <View className={`px-4 py-2 ${!debitCardMode ? 'bg-[#E8EFFC]': ''} rounded-2xl duration-200 flex flex-col justify-center items-center`}>
                                <Text className={`text-[14px] ${!debitCardMode ? 'text-[#2C65E2]' : ''} font-medium`}>Credit Mode</Text>
                            </View>
                        </View>
                        <Switch 
                            trackColor={{false: '#81b0ff', true: '#81b0ff'}}
                            thumbColor={debitCardMode ? '#f4f3f4' : '#f4f3f4'}
                            ios_backgroundColor="#81b0ff"
                            onValueChange={toggleSwitch}
                            value={debitCardMode}
                        />
                        <View>
                            <View className={`px-4 py-2 ${debitCardMode ? 'bg-[#E8EFFC]': ''} rounded-2xl flex flex-col justify-center items-center`}>
                                <Text className={`text-[14px] ${debitCardMode ? 'text-[#2C65E2]' : ''} font-medium`}>Debit Mode</Text>
                            </View>        
                        </View>
                    </View>
                    <View className='h-[62%] px-4 py-4'>
                        <LinearGradient className='w-full h-full rounded-2xl' colors={['#9F3A70' , '#303F82']} start={{x: 0, y:0}} end={{x:1, y:0}}>
                            <View className='w-full h-full flex flex-col justify-between'>
                                <View className='py-4 px-6'>
                                    <Text style={{ fontFamily: 'Satoshi'}} className='text-[17px] text-white'>Standard</Text>    
                                </View>
                                <View className='py-4 px-6 flex flex-row justify-between'>
                                    <View className='flex flex-row space-x-2 items-center'>
                                        <Text style={{ fontFamily: 'Satoshi'}} className='text-[9px] text-white'>● ●</Text>    
                                        <Text style={{ fontFamily: 'Satoshi'}} className='text-[17px] text-white'> 7560</Text>    
                                    </View>
                                    <Image className='w-[60px] h-[20px]' source={require('../../assets/images/visa.png')} />
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    <View className='h-[20%] flex flex-row justify-between px-5'>
                            <TouchableHighlight className='z-10' underlayColor='#FFFEFE'> 
                                <View className='flex flex-col items-center space-y-2'>
                                    <View className='h-[40px] w-[40px] bg-[#E8EFFC] rounded-full flex flex-col justify-center items-center'>
                                        <MaterialIcons className='' name='remove-red-eye' size={20} color="#2C65E2"/>
                                    </View>
                                    <Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#2C65E2] font-bold'>Details</Text>
                                </View>
                            </TouchableHighlight>
                            <View className='flex flex-col items-center space-y-2'>
                                <View className='h-[40px] w-[40px] bg-[#E8EFFC] rounded-full flex flex-col justify-center items-center'>
                                    <Ionicons className='' name='snow-outline' size={20} color="#2C65E2"/>
                                </View>
                                <Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#2C65E2] font-bold'>Freeze</Text>
                            </View>
                            <View className='flex flex-col items-center space-y-2'>
                                <View className='h-[40px] w-[40px] bg-[#E8EFFC] rounded-full flex flex-col justify-center items-center'>
                                    <Ionicons className='' name='settings-outline' size={20} color="#2C65E2"/>
                                </View>
                                <Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#2C65E2] font-bold'>Settings</Text>
                            </View>
                        </View>
                </View>
            </View>
		</ScrollView>
	);
}

export default Cards;
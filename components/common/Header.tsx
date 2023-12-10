import { View, Text, TouchableHighlight, TextInput, useWindowDimensions, Pressable} from 'react-native'
import React, { useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Link, router } from 'expo-router';

const Header = ({title}: any) => {
	const {height, width} = useWindowDimensions();
	const [name, setName] = React.useState('')


  return (
    <>
		<View className='h-[8vh] flex flex-row items-center justify-between px-5' style={{marginTop: height/20.6}}>
		    <TouchableHighlight underlayColor='#777E88' onPress={() => {router.push({pathname: '/wallet/account'})}} className='w-[34px] h-[34px] rounded-full bg-[#777E88] flex flex-col justify-center items-center'>
				<Text style={{ fontFamily: 'Satoshi'}} className='text-[15px] font-medium text-white'>DS</Text>
			</TouchableHighlight>
			<Text style={{ fontFamily: 'Satoshi'}} className='text-[18px] mr-2 font-bold'>{title}</Text>
			<TouchableHighlight underlayColor='' onPress={() => {router.push({pathname: '/wallet/scan'})}} className=''>
				<MaterialCommunityIcons className='' name='qrcode-scan' size={26} color="black"/>
			</TouchableHighlight>
		</View>
		<Pressable onPress={() => {router.push({pathname: '/wallet/search'})}} className='h-[6vh] flex flex-row items-center justify-between px-3'>
			<View pointerEvents='none' className={'bg-[#EDEEF3] text-[#9E9E9E] w-full flex flex-row space-x-5  py-[7px] px-3 rounded-3xl items-center'} >
				<IonIcons name="search" size={22} color="gray"/>
				<TextInput editable={false} className='text-[#9E9E9E]' placeholderTextColor="#9E9E9E"  autoCorrect={false} placeholder={`${title === 'Transfer'? 'Name, @Flextag, phone, email': 'Search'}`} />
			</View>
		</Pressable>
    </>
  )
}

export default Header
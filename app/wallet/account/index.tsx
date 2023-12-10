import { View, TouchableHighlight, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';
import AccountInfo from '../../../components/account/AccountInfo';
export default function ModalScreen() {

	const back = () => {
		router.push('..');
	};


	return (
		<View className='h-full bg-[#F9F8F9] flex-1 pb-6 px-6' >
			<SafeAreaView>
				<StatusBar  backgroundColor='#F6F7F6' />
				<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4 top-0'>
					<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
				</TouchableHighlight>
				<AccountInfo />
			</SafeAreaView>
		</View>
	);
}
  
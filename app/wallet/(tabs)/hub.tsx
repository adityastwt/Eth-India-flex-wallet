import * as React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import Apps from '../../../components/hub/Apps';
import Header from '../../../components/common/Header';

function HomeScreen() {

	return (
		<View className='flex  bg-[#F7F7F7]'>
			<ScrollView showsVerticalScrollIndicator={false} className=''>
			<Header title='Hub' />
				<View className='px-6  mt-6'>
					<Apps/>
				</View>
			</ScrollView>
	  </View>

	);
}

export default HomeScreen;

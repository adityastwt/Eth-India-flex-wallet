/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { View, Text, TextInput, TouchableHighlight, SafeAreaView, Pressable, useWindowDimensions, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from '../../../components/home/Account';
import Cards from '../../../components/home/Cards';
import { router } from 'expo-router';
import Linked from '../../../components/home/Linked';
import Header from '../../../components/common/Header';
import Actions from '../../../components/home/Actions';

const home = () => {

	const [activeTab, setActiveTab] = React.useState(0);

  return (
    <View className='flex mb-8 bg-[#F7F7F7]'>
      <Header title='Home' />
      		<View className='h-[8vh] flex flex-row mt-2 items-center px-3 space-x-3'>
				<View>
					<TouchableHighlight underlayColor='#FFFEFE' onPress={() => {setActiveTab(0);}} className={`${activeTab === 0 ? 'bg-[#FFFEFE] text-black' : 'text-[#828B94]'} py-2 px-4 rounded-2xl`}>
						<Text style={{ fontFamily: 'Satoshi'}} className={`${activeTab === 0 ? 'text-black' : 'text-[#828B94]'} text-[15px] font-bold`} >Account</Text>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight underlayColor='#FFFEFE' onPress={() => {setActiveTab(1);}} className={`${activeTab === 1 ? 'bg-[#FFFEFE] text-black' : 'text-[#828B94]'} py-2 px-4 rounded-2xl`}>
						<Text style={{ fontFamily: 'Satoshi'}} className={`${activeTab === 1 ? 'text-black' : 'text-[#828B94]'} text-[15px] font-bold`} >Cards</Text>
					</TouchableHighlight>
				</View>
				<View>
					<TouchableHighlight underlayColor='#FFFEFE' onPress={() => {setActiveTab(2);}} className={`${activeTab === 2 ? 'bg-[#FFFEFE] text-black' : 'text-[#828B94]'} py-2 px-4 rounded-2xl`}>
						<Text style={{ fontFamily: 'Satoshi'}} className={`${activeTab === 2 ? 'text-black' : 'text-[#828B94]'} text-[15px] font-bold`} >Linked</Text>
					</TouchableHighlight>
				</View>
			</View>
      <ScrollView showsVerticalScrollIndicator={false} className=''>
        {activeTab === 0 && <Account />}
        {activeTab === 1 && <Cards />}
        {activeTab === 2 && <Linked />}
        <View className='mt-5 px-5'>
          <Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[18px]'>Actions</Text>
        </View>
        <Actions />
      </ScrollView>
    </View>
  )
}

export default home
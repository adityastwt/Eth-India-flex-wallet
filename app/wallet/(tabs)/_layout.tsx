/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Tabs } from 'expo-router';
import 'react-native-gesture-handler';
import { View, TouchableHighlight, Text } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

export default function TabsLayout() {

	return (
		<>
			<Tabs initialRouteName="home"
				tabBar={(props) => <MyTabBar {...props} />}
			>
				<Tabs.Screen
					name="home"
					options={{
						href: '/home',
						headerShown: false
					}}
				/>
				<Tabs.Screen
					name="transfer"
					options={{
						href: '/transfer',
						headerShown: false
					}}
				/>
				<Tabs.Screen
					name="hub"
					options={{
						href: '/hub',
						headerShown: false,
						unmountOnBlur: true
					}}
				/>
			</Tabs>
		</>
	);
}

const MyTabBar = ({state, descriptors, navigation}: any) => {

	return (
		<View className='h-[55px] w-full flex-row bg-[#F6F7F6] justify-around'>
			{state.routes.map((route: any, index: number) => {
				const isFocused = state.index === index;
				const {options} = descriptors[route.key];

				const onPress = () => {
					const event = navigation.emit({
						type:'tabPress',
						target: 'route.key'
					});
					if(!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				return (
					<TouchableOpacity className='w-1/3' key={index} onPress={() => onPress()} testID={options.tabBarTestID} accessibilityRole="button">
						{
							index === 0 && (
								<TouchableHighlight onPress={onPress} underlayColor="#DEE0DF" className="h-full flex-1 justify-center items-center rounded-xl">
									<View className='flex-1 justify-center items-center'>
										{isFocused ? <Foundation className='' name='home' size={23} color='#2C65E2' /> : <Foundation color='#777E88' name='home' size={23} />}
										{isFocused ? <Text className='text-[10px] text-[#2C65E2] font-black'>Home</Text> : <Text className='text-[10px] text-[#777E88] font-bold'>Home</Text>}
									</View>
								</TouchableHighlight>
							)
						}
						{
							index === 1 && (
								<TouchableHighlight onPress={onPress} underlayColor="#DEE0DF" className='h-full hover:bg-[#DEE0DF] flex-1 justify-center items-center rounded-xl'>
									<View className='flex-1 justify-center items-center'>
										{isFocused ? <Octicons className='' name='arrow-switch' size={20} color='#2C65E2' /> : <Octicons name='arrow-switch' size={20} color='#777E88' />}
										{isFocused ? <Text className='text-[10px] text-[#2C65E2] font-black'>Transfer</Text> : <Text className='text-[10px] text-[#777E88] font-black'>Transfer</Text>}
									</View>
								</TouchableHighlight>
							)
						}
						{
							index === 2 && (
								<TouchableHighlight onPress={onPress} underlayColor="#DEE0DF" className='h-full flex-1 justify-center items-center rounded-xl '>
									<View className='flex-1 justify-center items-center'>
										{isFocused ? <AntDesign className='' name='appstore1' size={21} color='#2C65E2' /> : <AntDesign name='appstore1' color='#777E88' size={21} />}
										{isFocused ? <Text className='text-[10px] text-[#2C65E2] font-black'>Hub</Text> : <Text className='text-[10px] text-[#777E88] font-black'>Hub</Text>}
									</View>
								</TouchableHighlight>
							)
						}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
  
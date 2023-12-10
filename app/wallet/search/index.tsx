import { View, Text, SafeAreaView, TextInput, Pressable, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { router, useLocalSearchParams } from 'expo-router';

const search = () => {

    const { width} = useWindowDimensions();
    const {title} = useLocalSearchParams();

  return (
    <View className='bg-[#F9F8F9] flex-1'>
        <SafeAreaView>
            <View className='flex flex-row  items-center w-full'>
                <View className='h-[6vh] flex flex-row items-center justify-between px-3'>
                    <View className={'bg-[#EDEEF3] text-[#9E9E9E] w-[78vw] flex flex-row space-x-5  py-[7px] px-3 rounded-3xl items-center'} >
                        <IonIcons name="search" size={22} color="gray"/>
                        <TextInput className='text-[#9E9E9E]' placeholderTextColor="#9E9E9E" autoFocus={true} placeholder={`${title === 'Home' ? 'Search "Accounts, Cards, Settings"': (title === 'Hub' ? 'Search "tokens, rerwards, cards"' : 'Search "name, @flextag, phone"') }`}/>
                    </View>
                </View>
                <Pressable onPress={() => {router.push('..')}} className='w-[23vw]'>
                    <Text className='text-[#2C65E2] text-[16px]'>Cancel</Text>
                </Pressable>
            </View>
            <View className='flex flex-row justify-between mt-[3vh] items-center px-4'>
              <Text className='text-[17px] font-medium'  style={{ fontFamily: 'Satoshi'}}>Suggested Products</Text>
              <Text className="text-[14px] text-[#2C65E2] font-medium">See all</Text>
            </View>
            <View className='mt-6  py-6 rounded-xl flex flex-row space-x-6 mx-5 justify-between px-4'>
                <Pressable onPress={() => {router.push('/wallet/(models)/collectibles')}} className='flex flex-col space-y-2 items-center'>
                  <Image source={require('../../../assets/images/items1.png')} style={{width: width/6.55, height: width/6.55}}  />
                  <Text className='text-[12px] font-medium'  style={{ fontFamily: 'Satoshi'}}>Collectibles</Text>
                </Pressable>
                <Pressable onPress={() => {router.push('/wallet/(models)/tokens')}} className='flex flex-col space-y-2 items-center'>
                  <Image source={require('../../../assets/images/items2.png')} style={{width: width/6.55, height: width/6.55}}  />
                  <Text className='text-[12px] font-medium'  style={{ fontFamily: 'Satoshi'}}>Tokens</Text>
                </Pressable>
                <Pressable onPress={() => {router.push('/wallet/(models)/cards')}} className='flex flex-col space-y-2 items-center'>
                  <Image source={require('../../../assets/images/items3.png')} style={{width: width/6.55, height: width/6.55}}  />
                  <Text className='text-[12px] font-medium'  style={{ fontFamily: 'Satoshi'}}>Cards</Text>
                </Pressable>
                <Pressable onPress={() => {router.push('/wallet/(models)/marketplace')}} className='flex flex-col space-y-2 items-center'>
                  <Image source={require('../../../assets/images/items4.png')} style={{width: width/6.55, height: width/6.55}}  />
                  <Text className='text-[12px] font-medium'  style={{ fontFamily: 'Satoshi'}}>Marketplace</Text>
                </Pressable>
              </View>
        </SafeAreaView>
    </View>
  )
}

export default search
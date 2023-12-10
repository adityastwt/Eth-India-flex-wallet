import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Contact from '../../../components/transfer/Contact'
import Bank from '../../../components/transfer/Bank'
import Header from '../../../components/common/Header'

const transfer = () => {
  return (
    <View className='flex h-[91vh] bg-[#F7F7F7]'>
      <Header title='Transfer' />
      <ScrollView showsVerticalScrollIndicator={false} className=''>
        <Contact />
        <Bank />
      </ScrollView>
    </View>
  )
}

export default transfer
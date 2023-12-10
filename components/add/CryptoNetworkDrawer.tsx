import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';


const CryptoNetworkDrawer = () => {

	// ref
	const bottomSheetRef = useRef<BottomSheet>(null);
 
	// renders
	return (
		<View style={styles.container} >
			<BottomSheet
				ref={bottomSheetRef}
				index={0}
				snapPoints={['95%']}
			>
				<View className='h-full bg-[#F9F8F9]'>
					<View className='flex flex-col mt-2 mx-3'>
						<Text className="text-black text-[30px] font-bold" style={{ fontFamily: 'Satoshi'}} >Add Money</Text>
						<View className='mt-8 flex flex-row justify-center'>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[#737A87] font-bold text-center'>Use these details to send money to your account</Text>
						</View>
						<View className='bg-[#FFFEFE] py-1 px-6 mx-3 mt-9  rounded-3xl  h-[32vh] flex flex-col justify-between'>
							<View className='h-1/3 flex flex-row justify-between py-5'>
								<View className='h-max flex flex-col justify-between'>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727B86]'>Network</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] font-bold text-[#4879E7]'>Flex network</Text>
								</View>
								<View className='flex flex-col justify-center'>
									<MaterialCommunityIcons className='' name='content-copy' size={17} color="#4879E7"/>
								</View>
							</View>
							<View className='h-1/3 flex flex-row justify-between py-5'>
								<View className='h-max flex flex-col justify-between'>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727B86]'>Address</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] font-bold text-[#4879E7]'>0x56C1ccd....512272C</Text>
								</View>
								<View className='flex flex-col justify-center'>
									<MaterialCommunityIcons className='' name='content-copy' size={17} color="#4879E7"/>
								</View>
							</View>
							<View className='h-1/3 flex flex-row justify-between py-5'>
								<View className='h-max flex flex-col justify-between'>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] text-[#727B86]'>Sort Code</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[13px] font-bold text-[#4879E7]'>FLEXGB21</Text>
								</View>
								<View className='flex flex-col justify-center'>
									<MaterialCommunityIcons className='' name='content-copy' size={17} color="#4879E7"/>
								</View>
							</View>
						</View>
						<View className='bg-[#FFFEFE] py-1 px-6 mx-3 mt-4  rounded-3xl  h-[22vh] flex flex-col justify-between'>
							<View className='h-1/2 flex flex-row space-x-6 items-center py-5'>
								<View className='flex flex-col justify-center'>
									<FontAwesome className='' name='shield' size={22} color="black"/>
								</View>
								<View className='h-max flex flex-col space-y-1'>
									<Text  className='text-[14px] font-medium '>You get full custody of your money.</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#4879E7]'>Learn more</Text>
								</View>
							</View>
							<View className='h-1/2 flex flex-row space-x-6 items-center py-5'>
								<View className='flex flex-col justify-center'>
									<Foundation className='' name='lightbulb' size={24} color="black"/>
								</View>
								<View className='h-max flex flex-col space-y-1 pr-2'>
									<Text  className='text-[14px] font-medium '>Use these details for a SEPA transfer from your bank account.</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 48,
		backgroundColor: 'transparent',
		zIndex: 20
	},
});

export default CryptoNetworkDrawer;


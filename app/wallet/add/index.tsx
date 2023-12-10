import { View, Text, TouchableHighlight, StatusBar, Image } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { router } from 'expo-router';
import DebitCardDrawer from '../../../components/add/DebitCardDrawer';
import BankTransferDrawer from '../../../components/add/BankTransferDrawer';
import CryptoNetworkDrawer  from '../../../components/add/CryptoNetworkDrawer';
import Modal from 'react-native-modal';
import { useAppSelector } from  '../../../redux/hooks';

type Drawer = {
	cardDrawer: boolean;
	bankDrawer: boolean;
	cryptoDrawer: boolean;
	applePayDrawer: boolean;
}

const initialState = {
	cardDrawer: false,
	bankDrawer: false,
	cryptoDrawer: false,
	applePayDrawer: false
};

export default function ModalScreen() {

	const [drawer, setDrawer] = React.useState<Drawer>(initialState);
	const balance = useAppSelector((state) => state.balanceSlice);

	const back = () => {
		router.push('..');
	};

	const openCardDrawer = () => {
		setDrawer(prevState => ({
			...prevState, cardDrawer: true
		}));
	};
	const openBankDrawer = () => {
		setDrawer(prevState => ({
			...prevState, bankDrawer: true
		}));
	};
	const openApplePayDrawer = () => {
		setDrawer(prevState => ({
			...prevState, applePayDrawer: true
		}));
	};
	const openCryptoDrawer = () => {
		setDrawer(prevState => ({
			...prevState, cryptoDrawer: true
		}));
	};

	return (
		<View className='h-full bg-[#F9F8F9] flex-1 mt-4' >
			<StatusBar  backgroundColor='#F6F7F6' />
			<View className='top-0 flex flex-col pt-1 px-4'>
				<TouchableHighlight underlayColor='#F9F8F9' onPress={back} className='py-4 '>
					<MaterialIcons className='' name='keyboard-backspace' size={30} color="black"/>
				</TouchableHighlight>
				<Text className="text-black text-[32px] font-bold" style={{ fontFamily: 'GeneralSans'}} >Add Money</Text>
				<View className='flex flex-row space-x-3 items-center mt-2'>
					<FontAwesome className='' name='shield' size={14} color="#2C65E2"/>
					<Text className="text-[14px] text-[#2C65E2] font-bold" style={{ fontFamily: 'Satoshi'}} >Your money will be fully in your control. </Text>
				</View>
			</View> 
			<View className='flex flex-col space-y-8 mt-8 px-4'>
				<View className='h-[90px] w-full bg-[#E0E3E7] rounded-2xl flex flex-row justify-between px-5 py-2 items-center'>
					<View className='flex flex-row space-x-4 h-full items-center'>
						<View className='flex flex-col space-y-2'>
							<View className='flex flex-row space-x-3 items-center'>
								<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[24px]'>GBP</Text>
								<MaterialIcons className='' name='expand-more' size={28} />
							</View>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Balance: £{balance.Balance}</Text>
						</View>
					</View>
					<View className='mb-3'>
						<Text style={{ fontFamily: 'Satoshi'}} className='font-medium text-[19px] text-[#737A87]'>+£0</Text>
					</View>
				</View>
				<View className='flex flex-col space-y-4 mt-8'>
					<TouchableHighlight className='rounded-2xl' onPress={openCardDrawer} underlayColor='#BDBDBD' >
						<View className='h-[90px] w-full bg-[#FFFFFF] rounded-2xl flex flex-row space-x-5 px-5 py-2 items-center'>
							<View className=''>
								<Image className='w-[40px] h-[40px] rounded-full' source={require('../../../assets/images/logo.png')} />
							</View>
							<View className='flex flex-row space-x-4 h-full items-center'>
								<View className='flex flex-col space-y-1'>
									<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Debit card</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Top up with your existing debit cards.</Text>
								</View>
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight className='rounded-2xl' onPress={openBankDrawer} underlayColor='#BDBDBD' >
						<View className='h-[90px] w-full bg-[#FFFFFF] rounded-2xl flex flex-row space-x-5 px-5 py-2 items-center'>
							<View className=''>
								<MaterialCommunityIcons className='' name='bank' size={30} color="#2C65E2"/>
							</View>
							<View className='flex flex-row space-x-4 h-full items-center'>
								<View className='flex flex-col space-y-1'>
									<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Bank Transfer</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Send money from your bank account</Text>
								</View>
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight className='rounded-2xl' onPress={openApplePayDrawer} underlayColor='#BDBDBD' >
						<View className='h-[90px] w-full bg-[#FFFFFF] rounded-2xl flex flex-row space-x-5 px-5 py-2 items-center'>
							<View className=''>
								<Image className='w-[34px] h-[34px] rounded-full' source={require('../../../assets/images/apple.png')} />
							</View>
							<View className='flex flex-row space-x-4 h-full items-center'>
								<View className='flex flex-col space-y-1'>
									<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Apple Pay</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Top up with Apple pay</Text>
								</View>
							</View>
						</View>
					</TouchableHighlight>
					<TouchableHighlight className='rounded-2xl' onPress={openCryptoDrawer} underlayColor='#BDBDBD' >
						<View className='h-[90px] w-full bg-[#FFFFFF] rounded-2xl flex flex-row space-x-5 px-5 py-2 items-center'>
							<View className=''>
								<Entypo className='' name='align-bottom' size={30} color="#2C65E2"/>
							</View>
							<View className='flex flex-row space-x-4 h-full items-center'>
								<View className='flex flex-col space-y-1'>
									<Text style={{ fontFamily: 'Satoshi'}} className='font-bold text-[15px]'>Crypto Network</Text>
									<Text style={{ fontFamily: 'Satoshi'}} className='text-[12px] text-[#727A87]'>Send money from a Crypto network</Text>
								</View>
							</View>
						</View>
					</TouchableHighlight>
				</View>
				<Modal
					isVisible={drawer.cardDrawer}
					onSwipeComplete={() => {setDrawer(initialState);}}
					swipeDirection={['down']}
					className='flex flex-col justify-end m-0'
				>
					<DebitCardDrawer />
				</Modal>
				<Modal
					isVisible={drawer.bankDrawer}
					onSwipeComplete={() => {setDrawer(initialState);}}
					swipeDirection={['down']}
					className='flex flex-col justify-end m-0'
				>
					<BankTransferDrawer />
				</Modal>
				<Modal
					isVisible={drawer.cryptoDrawer}
					onSwipeComplete={() => {setDrawer(initialState);}}
					swipeDirection={['down']}
					className='flex flex-col justify-end m-0'
				>
					<CryptoNetworkDrawer />
				</Modal>
			</View>
		</View>
	);
}
  
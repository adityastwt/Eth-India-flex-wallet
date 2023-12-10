/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import {ModalHeader} from './Modal/ModalHeader';
import { useAppSelector } from  '../../redux/hooks';


interface PairModalProps {
  proposal: any; //ToDo: fix.
  visible: boolean;
  open: (arg0: boolean) => void;
  handleAccept: () => void;
}

/*
     @notice: Proposal Modal for initiating the pair()
     @params: proposal, visible, open, handleAccept

     Rendering
      1. ModalHeader
      2. Requested Permissions Text
      3. Chain + Methods + Events
      4. Accept/Reject Buttons
  */

export function PairModal({
	proposal,
	visible,
	open,
	handleAccept,
}: PairModalProps) {
	const balance = useAppSelector((state) => state.balanceSlice);

	// Note: Current namespaces is for EIP155 only (i.e. methods, events, chains)
	const url = proposal?.params?.proposer?.metadata.url;

	return (
		<Modal
			isVisible={visible}
			backdropOpacity={0.6}
			onTouchEnd={() => open(false)}>
			<View className='bg-white rounded-xl'>
				<View className=''>
					<ModalHeader url={url}/>
					<View className='mt-6 mx-4 border  border-gray-300 rounded-xl px-3 py-3 flex flex-row space-x-4 items-center'>
						<View className='w-[34px] h-[34px] rounded-full bg-[#777E88] flex flex-col justify-center items-center'>
							<Text style={{ fontFamily: 'Satoshi'}} className='text-[15px] font-medium text-white'>DS</Text>
						</View>
						<View className='flex flex-col space-y-1'>
							<Text className='font-semibold'>Dolly Singh (0x21BA1....dBE)</Text>
							<Text className='font-normal text-[13px] text-gray-600'>Balance: £ {balance.Balance}</Text>
						</View>
					</View>

					<View className='mt-6 mx-6 flex flex-row justify-center items-center space-x-4 mb-4'>
						<TouchableHighlight underlayColor='transparent' className='w-1/2 border border-gray-700 rounded-2xl flex flex-col justify-center items-center py-3'>
							<Text className='text-gray-700 font-medium text-[15px]'>Cancel</Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={handleAccept} underlayColor='transparent' className='w-1/2 border bg-[#3076c9] border-[#3076c9] rounded-2xl flex flex-col justify-center items-center py-3'>
							<Text className='text-white font-medium text-[15px]'>Connect</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		</Modal>
	);
}
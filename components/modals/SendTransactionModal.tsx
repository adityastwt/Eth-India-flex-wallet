/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {SignClientTypes} from '@walletconnect/types';
import {Tag} from './Tag';
import {Methods} from './Modal/Methods';
import {Message} from './Modal/Message';
import {AcceptRejectButton} from './AcceptRejectButton';
import {ModalHeader} from './Modal/ModalHeader';
import {
	approveEIP155Request,
	rejectEIP155Request,
} from '../../utils/EIP115Request';
import {web3wallet} from '../../utils/walletConnectUtils';

interface SendTransactionModalProps {
  visible: boolean;
  setVisible: (arg0: boolean) => void;
  requestEvent: SignClientTypes.EventArguments['session_request'] | undefined;
  requestSession: any;
}

export function SendTransactionModal({
	visible,
	setVisible,
	requestEvent,
	requestSession,
}: SendTransactionModalProps) {
	const chainID = requestEvent?.params?.chainId?.toUpperCase();
	const method = requestEvent?.params?.request?.method;

	const requestURL = requestSession?.peer?.metadata?.url;

	const {topic, params} = requestEvent!;
	const {request} = params;
	const transaction = request.params[0];

	async function onApprove() {
		console.log('123');
		if (requestEvent) {
			console.log('456');
			const response = await approveEIP155Request(requestEvent);
			await web3wallet.respondSessionRequest({
				topic,
				response,
			});
			setVisible(false);
		}
	}

	async function onReject() {
		if (requestEvent) {
			const response = rejectEIP155Request(requestEvent);
			await web3wallet.respondSessionRequest({
				topic,
				response,
			});
			setVisible(false);
		}
	}

	return (
		<Modal backdropOpacity={0.6} isVisible={visible}>
			<View >
				<ModalHeader  url={requestURL}/>

				<View  />

				<View >
					<View >
						<Tag value={chainID!} grey={true} />
					</View>
					<Methods methods={[method!]} />
					<Message message={JSON.stringify(transaction, null, 2)} />
				</View>

				<View >
					<AcceptRejectButton accept={false} onPress={() => onReject()} />
					<AcceptRejectButton accept={true} onPress={() => onApprove()} />
				</View>
			</View>
		</Modal>
	);
}


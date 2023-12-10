/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState, useEffect, useCallback} from 'react';
import { Slot } from 'expo-router';
import useInitialization, {web3wallet} from '../../utils/walletConnectUtils';
import { buildApprovedNamespaces } from '@walletconnect/utils';
import {SignClientTypes} from '@walletconnect/types';
import { PairModal } from '../../components/modals/PairModal';
import { useConnectProvider } from '../../context/themeContext';
import {EIP155_SIGNING_METHODS} from '../../utils/EIP155';
import { SendTransactionModal } from '../../components/modals/SendTransactionModal';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/display-name
export default () => {
	useInitialization();

	// Modal Visible State
	const [signModal, setSignModal] = useState(false);
	const [signTypedDataModal, setSignTypedDataModal] = useState(false);
	const [sendTransactionModal, setSendTransactionModal] = useState(false);
	const [successPair, setSuccessPair] = useState(false);

	const [pairedProposal, setPairedProposal] = useState();
	const [requestEventData, setRequestEventData] = useState();
	const [requestSession, setRequestSession] = useState();

	// Pairing State
	const {WCURI, approvalModal, setApprovalModal} = useConnectProvider();
    
	async function handleAccept() {
		const {id, params} = pairedProposal!;
		console.log(params);
		if (pairedProposal) {
			const approvedNamespaces = buildApprovedNamespaces({
				proposal: params,
				supportedNamespaces: {
					eip155: {
						chains: ['eip155:1', 'eip155:8453'],
						methods: ['eth_sendTransaction', 'eth_signTransaction', 'personal_sign', 'eth_sign'],
						events: ['accountsChanged', 'chainChanged'],
						accounts: [
							'eip155:1:0x21BA1dB8407F373bb7638dFbAD3a70868D0afdBE',
							'eip155:8453:0x21BA1dB8407F373bb7638dFbAD3a70868D0afdBE'
						]
					}
				}
			});
    
			await web3wallet.approveSession({
				id,
				namespaces: approvedNamespaces,
			});
			setApprovalModal(false);
			setSuccessPair(true);
		}
	}

	const onSessionProposal = useCallback(
		(proposal: SignClientTypes.EventArguments['session_proposal']) => {
			setPairedProposal(proposal as any);
		},
		[],
	);
    
	const onSessionRequest = useCallback(
		async (requestEvent: SignClientTypes.EventArguments['session_request']) => {
			const {topic, params} = requestEvent;
			const {request} = params;
			const requestSessionData =
            web3wallet.engine.signClient.session.get(topic);

			switch (request.method) {
			case EIP155_SIGNING_METHODS.ETH_SIGN:
			case EIP155_SIGNING_METHODS.PERSONAL_SIGN:
				setRequestSession(requestSessionData as any);
				setRequestEventData(requestEvent as any);
				setSignModal(true);
				return;
    
			case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA:
			case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3:
			case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4:
				setRequestSession(requestSessionData as any);
				setRequestEventData(requestEvent as any);
				setSignTypedDataModal(true);
				return;
			case EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION:
			case EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION:
				setRequestSession(requestSessionData as any);
				setRequestEventData(requestEvent as any);
				setSendTransactionModal(true);
				return;
			}
		},
		[],
	);

	useEffect(() => {
		if (
			approvalModal ||
          signTypedDataModal ||
          signModal ||
          sendTransactionModal
		) {
			web3wallet.on('session_proposal', onSessionProposal);
			web3wallet.on('session_request', onSessionRequest);
		}
	}, [
		WCURI,
		approvalModal,
		signModal,
		signTypedDataModal,
		sendTransactionModal,
		requestEventData,
		requestSession,
		onSessionProposal,
		onSessionRequest,
		successPair,
	]);


	return (
		<>
			<Slot/>
			<PairModal
				proposal={pairedProposal}
				open={setApprovalModal}
				visible={approvalModal}
				handleAccept={handleAccept}
			/>
			{requestEventData && requestSession && sendTransactionModal && (
				<SendTransactionModal
					visible={sendTransactionModal}
					setVisible={setSendTransactionModal}
					requestEvent={requestEventData}
					requestSession={requestSession}
				/>
			)}
		</>
	);
};
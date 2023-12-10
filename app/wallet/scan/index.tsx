import Scanner from '../../../components/scan/Scan';
import * as React from 'react';
import {  View } from 'react-native';
import { useConnectProvider } from '../../../context/themeContext';
import { Platform } from 'react-native';
import { web3WalletPair } from '../../../utils/walletConnectUtils';

function ScanScreen() {

	const {setWCUri, setApprovalModal} = useConnectProvider();

	async function pair(uri: string) {
		const pairing = await web3WalletPair({uri});
		setWCUri('');
			setApprovalModal(true);
		return pairing;
	}

	return (
		<>
			<Scanner pair={pair} />
		</>
	);
}

export default ScanScreen;

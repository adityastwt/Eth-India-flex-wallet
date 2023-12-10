import '@walletconnect/react-native-compat';
import '@ethersproject/shims';
import { Core } from '@walletconnect/core';
import { ICore } from '@walletconnect/types';

import { Web3Wallet, IWeb3Wallet } from '@walletconnect/web3wallet';
import { useState, useCallback, useEffect } from 'react';


export let web3wallet: IWeb3Wallet;
export let core: ICore;
export let currentETHAddress: string;

const getWeb3Wallet = async () => {
	console.log('initializing');
	currentETHAddress = '0x21BA1dB8407F373bb7638dFbAD3a70868D0afdBE';

	const ENV_PROJECT_ID = '5b17aedd5b65aae9bbabff31a3f379c4';
	const core = new Core({
		projectId: ENV_PROJECT_ID,
	});

	web3wallet = await Web3Wallet.init({
		core,
		metadata: {
			name: 'Flex wallet',
			description: 'ReactNative Web3Wallet',
			url: 'https://walletconnect.com/',
			icons: ['https://avatars.githubusercontent.com/u/37784886'],
		},
	});
};

// Initialize the Web3Wallet
export default function useInitialization() {
	const [initialized, setInitialized] = useState(false);
  
	const onInitialize = useCallback(async () => {
		try {
			await getWeb3Wallet();
			setInitialized(true);
		} catch (err: unknown) {
			console.log('Error for initializing', err);
		}
	}, []);
  
	useEffect(() => {
		if (!initialized) {
			onInitialize();
		}
	}, [initialized, onInitialize]);
  
	return initialized;
}
  
export async function web3WalletPair(params: { uri: string }) {
	return await web3wallet.core.pairing.pair({ uri: params.uri });
}
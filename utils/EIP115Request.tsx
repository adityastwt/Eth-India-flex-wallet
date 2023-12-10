/* eslint-disable no-case-declarations */
import {
	EIP155_CHAINS,
	EIP155_SIGNING_METHODS,
	TEIP155Chain,
} from './EIP155';
import { eip155Wallets} from './EIP155Wallet';
import {
	getSignParamsMessage,
	getSignTypedDataParamsData,
	getWalletAddressFromParams,
} from './HelperUtils';
import {formatJsonRpcError, formatJsonRpcResult} from '@json-rpc-tools/utils';
import {SignClientTypes} from '@walletconnect/types';
import {getSdkError} from '@walletconnect/utils';
import {providers} from 'ethers';
import {currentETHAddress} from './walletConnectUtils';
import { AccountService } from './wallet';
  
export async function approveEIP155Request(
	requestEvent: SignClientTypes.EventArguments['session_request'],
) {
	console.log('678');
	const {params, id} = requestEvent;
	const {chainId, request} = params;
	console.log(request.method);
	switch (request.method) {
  
	case EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION:
		console.log('91011');
		const service = new AccountService();
		const tx = request.params[0];
		const hash = await service.execute(tx.to, tx.value, tx.data);
		// console.log(hash);
		const h1 = '0x123';
		return formatJsonRpcResult(id, h1);
  
	default:
		throw new Error(getSdkError('INVALID_METHOD').message);
	}
}
  
export function rejectEIP155Request(
	request: SignClientTypes.EventArguments['session_request'],
) {
	const {id} = request;
  
	return formatJsonRpcError(id, getSdkError('USER_REJECTED_METHODS').message);
}
  
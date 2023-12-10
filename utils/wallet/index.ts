/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from 'ethers';
import Account from './Account.json';
import EURe from './EURe.json';
import axios from 'axios';


export class AccountService{
	public provider: ethers.providers.JsonRpcProvider;
	private client: ethers.Wallet; 
	public wallet: ethers.Contract;
	private deployer: ethers.Signer;
	public euro: ethers.Contract;

	constructor(){
		this.provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
		this.client = new ethers.Wallet('0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d', this.provider);
		this.deployer = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', this.provider);
		this.wallet = new ethers.Contract('0x21BA1dB8407F373bb7638dFbAD3a70868D0afdBE', Account.abi, this.deployer);
		this.euro = new ethers.Contract('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', EURe.abi, this.deployer);
	}


	async execute(to: string, value: string, callData: string) {
		
		// get unsigned userOp
		const resp = await axios.post('http://172.20.10.2:8080/transaction/get', {to,value,callData});
		const {userOp, userOpHash} = resp.data;
		console.log(userOpHash);
		const signature = await this.client.signMessage(userOpHash);
		console.log(signature);
		const encodedSig = signature;
		userOp.signature = encodedSig;
		// send the signed userOp
		const newUserOp = {
			functionType: userOp.functionType,
			argument: userOp.argument,
			nonce: userOp.nonce,
			signature: encodedSig,
			signatureType: 0, // 0 for address, 1 for passkeys
			passkeySigner: '0',
			addressSigner: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
		};
		console.log(newUserOp);
		const response = await axios.post('http://172.20.10.2:8080/transaction/send', {newUserOp});
		const txRespnse = response.data.hash;
		console.log(txRespnse);
		return txRespnse;
	}

	async sendEuro(to: string, amount: string) {
		const calldata = await getEuroTransferCalldata(this.euro, this.provider, to, amount);
		console.log(calldata);
		const txResp = await this.execute(this.euro.address, '0', calldata!);
		console.log(txResp);
		return txResp;
	}

}

export const sendSignedUserOp = async (
	wallet: ethers.Contract,
	sender: ethers.Signer,
	userop: any,
) => {
	const txRespnse = await wallet.entrypoint(userop);
	return txRespnse;
};

const getEuroTransferCalldata = async (  
	euro: ethers.Contract,
	provider: ethers.providers.JsonRpcProvider,
	to: string,
	amount: string) => {

	const tx = await euro.populateTransaction.transfer!(
		to,
		ethers.utils.parseUnits(amount, 18),
	);
	return tx.data;
};

export const executeUnsignedUserOp = async (
	account: string,
	provider: ethers.providers.JsonRpcProvider,
	chainId: string,
	to: string,
	value: string,
	calldata: string,
) => {
	const argument = ethers.utils.defaultAbiCoder.encode(
		['address', 'uint256', 'bytes'],
		[to, value, calldata],
	);
	const userOp = await getUnsignedUserOp('0', argument, account, provider);
	const userOpHash = getUserOpHash(userOp, account, chainId);
	return { userOp, userOpHash };
};

  type userOp = {
    functionType: string;
    argument: string;
    nonce: string;
    signature: string;
  };
  

export const getUnsignedUserOp = async (
	functionType: string,
	argument: string,
	account: string,
	provider: ethers.providers.JsonRpcProvider,
) => {
	const AccountContract = new ethers.Contract(account, Account.abi, provider);

	const nonce = await AccountContract.getNonce();
  
	const UserOp: userOp = {
		functionType: functionType,
		argument: argument,
		nonce: nonce.toString(),
		signature: '0x',
	};
  
	return UserOp;
};

const getUserOpHash = (
	unsignedUserOp: userOp,
	wallet: string,
	chainId: string,
) => {
	const packed = ethers.utils.solidityPack(
		['uint256', 'bytes', 'uint256'],
		[
			unsignedUserOp.functionType,
			ethers.utils.keccak256(unsignedUserOp.argument),
			unsignedUserOp.nonce,
		],
	);
	// console.log("Packed user op is", packed);
	const enc = ethers.utils.defaultAbiCoder.encode(
		['bytes32', 'address', 'uint256'],
		[ethers.utils.keccak256(packed), wallet, chainId],
	);
	return ethers.utils.keccak256(enc);
};

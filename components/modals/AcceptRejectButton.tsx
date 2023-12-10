import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

interface IAcceptRejectButtonProps {
  accept: boolean;
  onPress: () => void;
}

export function AcceptRejectButton({
	accept,
	onPress,
}: IAcceptRejectButtonProps) {
	const acceptButtonColor = accept
		? ['#2BEE6C', '#1DC956']
		: ['#F25A67', '#F05142'];

	const buttonText = accept ? 'Accept' : 'Decline';

	return (
		<TouchableOpacity
			style={!accept ? {marginRight: 20} : null}
			onPress={() => onPress()}>
			<LinearGradient colors={acceptButtonColor}>
				<Text >{buttonText}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
}


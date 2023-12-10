import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Slot } from 'expo-router';

import { ConnectContextProvider } from '../context/themeContext';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/display-name
export default () => {
	return (
		<Provider store={store}>
			<ConnectContextProvider>
				<Slot />
			</ConnectContextProvider>
		</Provider>
	);
};
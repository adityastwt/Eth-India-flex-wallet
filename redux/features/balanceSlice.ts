import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BalanceSlice = {
  Balance: string;
};

const initialState: BalanceSlice = {
	Balance: '0',
};

export const balance = createSlice({
	name: 'balance',
	initialState,
	reducers: {
		reset: () => initialState,
		setBalance: (state, action: PayloadAction<string>) => {
			state.Balance = action.payload;
		},
	},
});

export const { reset, setBalance } = balance.actions;
export default balance.reducer;
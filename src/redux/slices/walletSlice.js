import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: {
    usd: 5842.75,
    eur: 3376.33,
    sgd: 1287.87,
    btc: 0.067239,
    eth: 1.2277522,
    ltc: 19.4622044,
  },
  selectedCurrency: 'USD',
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setSelectedCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setSelectedCurrency } = walletSlice.actions;
export default walletSlice.reducer;

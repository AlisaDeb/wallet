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
  transactions: [],
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setSelectedCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
    convertAndTransfer(state, action) {
      const { fromAmount, toAmount, fromCurrency, toCurrency } = action.payload;

      const from = fromCurrency.toLowerCase();
      const to = toCurrency.toLowerCase();

      state.balance[from] -= parseFloat(fromAmount);
      state.balance[to] += parseFloat(toAmount);
    },
  },
});

export const { setSelectedCurrency, convertAndTransfer } = walletSlice.actions;
export default walletSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getFormattedDateTime } from '../../utils/dateTime';
import { updateUserWallet } from './authSlice';

const emptyWallet = {
  balance: {
    usd: 0,
    eur: 0,
    sgd: 0,
    btc: 0,
    eth: 0,
    ltc: 0,
  },
  selectedCurrency: 'USD',
  transactions: [],
};

const initialState = emptyWallet;

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    loadWallet(state, action) {
      return action.payload || emptyWallet;
    },
    setSelectedCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
    convertAndTransfer(state, action) {
      const { fromAmount, toAmount, fromCurrency, toCurrency } = action.payload;

      const from = fromCurrency.toLowerCase();
      const to = toCurrency.toLowerCase();

      state.balance[from] -= parseFloat(fromAmount);
      state.balance[to] += parseFloat(toAmount);

      const { dateString, timeString } = getFormattedDateTime();

      state.transactions.unshift({
        id: uuidv4(),
        type: 'debit',
        date: dateString,
        time: timeString,
        description: `Transferred from ${fromCurrency} wallet`,
        amount: -parseFloat(fromAmount),
        currency: fromCurrency,
        status: 'completed',
      });

      state.transactions.unshift({
        id: uuidv4(),
        type: 'credit',
        date: dateString,
        time: timeString,
        description: `Received in ${toCurrency} wallet from conversion`,
        amount: parseFloat(toAmount),
        currency: toCurrency,
        status: 'completed',
      });
    },
    topUpBalance(state, action) {
      const { amount, currency } = action.payload;
      const value = parseFloat(amount);
      if (!value || value <= 0) return;

      const lowerCurrency = currency.toLowerCase();

      state.balance[lowerCurrency] += value;

      const { dateString, timeString } = getFormattedDateTime();

      state.transactions.unshift({
        id: uuidv4(),
        type: 'credit',
        date: dateString,
        time: timeString,
        description: `Top-up to ${currency} wallet`,
        amount: value,
        currency,
        status: 'completed',
      });
    },
    resetWallet: () => initialState,
  },
});

export const {
  loadWallet,
  setSelectedCurrency,
  convertAndTransfer,
  topUpBalance,
  resetWallet,
} = walletSlice.actions;

export const syncWalletToAuth = () => (dispatch, getState) => {
  const wallet = getState().wallet;
  dispatch(updateUserWallet(wallet));
};
export default walletSlice.reducer;

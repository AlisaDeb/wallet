import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getFormattedDateTime } from '../../utils/dateTime';

const initialState = {
  balance: {
    usd: 5842.75,
    eur: 3376.33,
    sgd: 1287.87,
    btc: 0.0672390156,
    eth: 1.227752232,
    ltc: 19.4622044012,
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
  },
});

export const { setSelectedCurrency, convertAndTransfer, topUpBalance } =
  walletSlice.actions;
export default walletSlice.reducer;

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
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
});

// export const { setBalance } = walletSlice.actions;
export default walletSlice.reducer;

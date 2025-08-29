import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { currencyAPI } from '../../api/currencyAPI';
import { SUPPORTED_CURRENCIES } from '../../constants/currencies';

const BASE = 'usd';

export const fetchRates = createAsyncThunk(
  'rates/fetchRates',
  async (_, thunkAPI) => {
    try {
      const symbols = SUPPORTED_CURRENCIES.filter(
        (symbol) => symbol !== 'USD'
      ).map((symbol) => symbol.toLocaleLowerCase());
      const data = await currencyAPI.fetchExchangeRates(BASE, symbols);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    base: BASE,
    rates: {},
    status: 'idle',
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        (state.status = 'succeeded'),
          (state.rates = { ...action.payload, usd: 1 });
      })
      .addCase(fetchRates.rejected, (state) => {
        (state.status = 'failed'), (state.rates = {});
      });
  },
});

export default ratesSlice.reducer;

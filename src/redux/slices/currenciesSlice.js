import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { currencyAPI } from '../../api/currencyAPI';
import { SUPPORTED_CURRENCIES } from '../../constants/currencies';

export const fetchSelectCurrencies = createAsyncThunk(
  'currencies/fetchSelectCurrencies',
  async (_, thunkAPI) => {
    try {
      const allCurrencies = await currencyAPI.fetchCurrencies();
      return allCurrencies.filter((symbol) =>
        SUPPORTED_CURRENCIES.includes(symbol.toUpperCase())
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSelectCurrencies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectCurrencies.fulfilled, (state, action) => {
        (state.status = 'succeeded'),
          (state.items = action.payload.map((item) => item.toUpperCase()));
      })
      .addCase(fetchSelectCurrencies.rejected, (state) => {
        (state.status = 'failed'), (state.error = action.payload);
      });
  },
});

export default currenciesSlice.reducer;

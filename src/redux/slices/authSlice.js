import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  users: [],
  currentUserId: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser(state, action) {
      const { name, email, password } = action.payload;
      const exists = state.users.find((user) => user.email === email);
      if (exists) {
        state.error = 'A user with this email already exists';
        return;
      }

      const nowISO = new Date().toISOString();
      const newUser = {
        id: uuidv4(),
        name,
        email,
        password,
        lastLogin: nowISO,
        wallet: {
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
        },
      };
      state.users.push(newUser);
      state.currentUserId = newUser.id;
      state.error = null;
    },
    loginUser(state, action) {
      const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        user.lastLogin = new Date().toISOString();
        state.currentUserId = user.id;
        state.error = null;
      } else {
        state.error = 'Incorrect email or password';
      }
    },
    logoutUser(state) {
      state.currentUserId = null;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
    updateUserWallet(state, action) {
      const user = state.users.find((user) => user.id === state.currentUserId);
      if (user) {
        user.wallet = action.payload;
      }
    },
  },
});

export const {
  registerUser,
  loginUser,
  logoutUser,
  clearError,
  updateUserWallet,
} = authSlice.actions;
export default authSlice.reducer;

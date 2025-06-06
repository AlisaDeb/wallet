import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import currenciesReducer from './slices/currenciesSlice';
import ratesReducer from './slices/ratesSlice';
import walletReducer from './slices/walletSlice';

const rootReducer = combineReducers({
  wallet: walletReducer,
  rates: ratesReducer,
  currencies: currenciesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistWalletReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistWalletReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

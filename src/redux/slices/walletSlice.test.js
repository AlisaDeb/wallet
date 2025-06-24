import { expect } from 'chai';
import walletReducer, {
  setSelectedCurrency,
  topUpBalance,
} from './walletSlice';
import { describe, it } from 'vitest';

describe('walletSlice - toUpBalance', () => {
  it('Should increase USD balance by 100', () => {
    const initialState = {
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

    const action = topUpBalance({ amount: '100', currency: 'USD' });
    const state = walletReducer(initialState, action);

    expect(state.balance.usd).toBe(100);
    expect(state.transactions.length).toBe(1);
    expect(state.transactions[0].amount).toBe(100);
    expect(state.transactions[0].currency).toBe('USD');
    expect(state.transactions[0].type).toBe('credit');
  });

  it('Should update selectedCurrency', () => {
    const initialState = {
      balance: {},
      selectedCurrency: 'USD',
      transactions: [],
    };
    const action = setSelectedCurrency('EUR');
    const state = walletReducer(initialState, action);
    expect(state.selectedCurrency).toBe('EUR');
  });
});

import React from 'react';
import { CurrencyConverter } from './CurrencyConverter/CurrencyConverter';

export const AccountOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {' '}
      <div className="lg:col-span-2 space-y-8">
        <CurrencyConverter />
        <div>Recent Transactions</div>
      </div>
      <div>
        <div>Top Up Balance</div>
        <div>Account Summary</div>
      </div>
    </div>
  );
};

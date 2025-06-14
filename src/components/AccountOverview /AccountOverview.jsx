import React from 'react';
import { CurrencyConverter } from './CurrencyConverter/CurrencyConverter';
import { RecentTransactions } from './RecentTransactions/RecentTransactions';
import { SecurityStatus } from './RightPanel/SecurityStatus/SecurityStatus';
import { TopUpBalance } from './RightPanel/TopUpBalance/TopUpBalance';

export const AccountOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {' '}
      <div className="lg:col-span-2 space-y-8">
        <CurrencyConverter />
        <RecentTransactions />
      </div>
      <div className="space-y-8">
        <TopUpBalance />
        <SecurityStatus />
      </div>
    </div>
  );
};

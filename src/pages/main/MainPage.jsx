import React from 'react';
import { AccountOverview } from '../../components/AccountOverview /AccountOverview';
import { TotalBalance } from '../../components/TotalBalance/TotalBalance';

export const MainPage = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-8">
        <TotalBalance />
        <AccountOverview />
      </div>
    </>
  );
};

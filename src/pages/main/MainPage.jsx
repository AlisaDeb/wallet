import React from 'react';
import { AccountOverview } from '../../components/AccountOverview /AccountOverview';
import { Footer } from '../../components/Footer/Footer';
import { TotalBalance } from '../../components/TotalBalance/TotalBalance';

export const MainPage = () => {
  return (
    <>
      <main className="container mx-auto px-6 py-8">
        <TotalBalance />
        <AccountOverview />
        <Footer />
      </main>
    </>
  );
};

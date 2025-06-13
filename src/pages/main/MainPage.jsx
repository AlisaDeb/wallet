import React from 'react';
import { RightPanel } from '../../components/RightPanel/RightPanel';
import { TotalBalance } from '../../components/TotalBalance/TotalBalance';

export const MainPage = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-8">
        <TotalBalance />
        <RightPanel />
      </div>
    </>
  );
};

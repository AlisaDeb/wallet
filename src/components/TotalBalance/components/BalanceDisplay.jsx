import React from 'react';

export const BalanceDisplay = ({ selectedCurrency, getConvertedBalance }) => {
  const formatNumber = (num) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <span className="text-4xl font-bold text-gray-900">
      {selectedCurrency === 'USD'
        ? '$ ' + formatNumber(getConvertedBalance())
        : formatNumber(getConvertedBalance()) + ' ' + selectedCurrency}
    </span>
  );
};

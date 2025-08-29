import React from 'react';

export const BalanceDisplay = ({ selectedCurrency, selectedBalance }) => {
  const formatNumber = (num, currency) => {
    if (['BTC', 'ETH', 'LTC'].includes(currency)) {
      return num.toLocaleString('en-US', {
        minimumFractionDigits: 10,
        maximumFractionDigits: 10,
      });
    }
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <span className="text-4xl font-bold text-gray-900">
      {selectedCurrency === 'USD'
        ? '$ ' + formatNumber(selectedBalance, selectedCurrency)
        : formatNumber(selectedBalance, selectedCurrency) +
          ' ' +
          selectedCurrency}
    </span>
  );
};

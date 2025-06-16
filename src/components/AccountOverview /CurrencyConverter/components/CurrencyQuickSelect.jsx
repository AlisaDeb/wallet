import React from 'react';
import { SUPPORTED_CURRENCIES } from '../../../../constants/currencies';

export const CurrencyQuickSelect = ({ onCurrencyQuickSelect }) => {
  return (
    <>
      {' '}
      <div className="mt-6 flex justify-center flex-wrap gap-2">
        {SUPPORTED_CURRENCIES.map((currency) => (
          <button
            key={currency}
            onClick={() => onCurrencyQuickSelect(currency)}
            className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg text-sm scale-smooth cursor-pointer"
          >
            {currency}
          </button>
        ))}
      </div>
    </>
  );
};

import React from 'react';
import clsx from 'clsx';
import { isCrypto } from '../../utils/formatting';

export const CurrencyAmountInput = ({
  label,
  amount,
  setAmount,
  currency,
  setCurrency,
  currencies = [],
  onFocus,
  currencySymbol,
  error,
}) => {
  const handleChange = (e) => {
    let val = e.target.value;
    const decimalLimit = isCrypto(currency) ? 10 : 2;
    const regex = new RegExp(`^\\d*(\\.\\d{0,${decimalLimit}})?$`);

    if (val === '' || regex.test(val)) {
      setAmount(val);
    }
  };

  return (
    <div>
      {' '}
      <label className="block text-sm font-medium text-grey-700 mb-1">
        {label}
      </label>
      <div
        className={clsx(
          'relative flex w-full rounded-lg overflow-hidden border',
          error
            ? 'border-red-600  focus-within:ring-red-600 focus-within:ring-1'
            : ' border-gray-300  focus-within:ring-indigo-500 focus-within:ring-2'
        )}
      >
        {currencySymbol && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">{currencySymbol}</span>
          </div>
        )}
        <input
          type="number"
          min="0"
          value={amount}
          onChange={handleChange}
          onFocus={onFocus}
          className={`flex-grow w-full px-4 py-3 outline-none border-r-0 ${
            currencySymbol ? 'pl-8' : ''
          }`}
          placeholder="0.00"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="outline-none border-l-0 border-gray-300  py-0 pl-2 pr-2 text-gray-500 sm:text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="text-sm text-red-600 mt-1">Balance too low to proceed</p>
      )}
    </div>
  );
};

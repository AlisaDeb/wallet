import React from 'react';

export const CurrencyInputBlock = ({
  label,
  currencies = [],
  amount,
  currency,
  setAmount,
  setCurrency,
  onFocus,
}) => {
  return (
    <>
      {' '}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-grey-700 mb-1">
          {label}
        </label>
        <div className="flex w-full rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-indigo-500">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onFocus={onFocus}
            className="flex-grow w-full px-4 py-3 outline-none border-r-0"
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
      </div>
    </>
  );
};

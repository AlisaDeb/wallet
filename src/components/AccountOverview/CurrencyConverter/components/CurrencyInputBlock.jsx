import React from 'react';
// import { isCrypto } from '../../../../utils/formatting';
import { CurrencyAmountInput } from '../../../UI/CurrencyAmountInput';

export const CurrencyInputBlock = ({
  label,
  currencies = [],
  amount,
  currency,
  setAmount,
  setCurrency,
  onFocus,
  error,
}) => {
  return (
    <>
      {' '}
      <div className="md:col-span-2">
        <CurrencyAmountInput
          label={label}
          amount={amount}
          setAmount={setAmount}
          currency={currency}
          setCurrency={setCurrency}
          currencies={currencies}
          onFocus={onFocus}
          error={error}
        />
      </div>
    </>
  );
};

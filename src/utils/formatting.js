export const isCrypto = (currency) => {
  const cryptoCurrencies = ['btc', 'eth', 'ltc'];
  return cryptoCurrencies.includes(currency.toLowerCase());
};

export const formatAmount = (amount, currency) => {
  if (!amount) return '';
  const decimals = isCrypto(currency) ? 10 : 2;
  return parseFloat(amount).toFixed(decimals);
};

const API_KEY = import.meta.env.VITE_CG_API_KEY;
const BASE_URL = 'https://api.coingecko.com/api/v3';

export const currencyAPI = {
  async fetchCurrencies() {
    try {
      const response = await fetch(
        `${BASE_URL}/simple/supported_vs_currencies?x_cg_demo_api_key=${API_KEY}`
      );
      if (!response.ok) throw new Error('Failed to fetch currencies');
      return await response.json();
    } catch (error) {
      console.error('Error loading currencies:', error);
      return [];
    }
  },

  async fetchExchangeRates(base = 'usd', symbols = []) {
    const vs_currencies = symbols.join(',');
    try {
      const response = await fetch(
        `${BASE_URL}/simple/price?ids=${base}&vs_currencies=${vs_currencies}&x_cg_demo_api_key=${API_KEY}`
      );
      if (!response.ok) throw new Error('Failed to fetch exchange rates');
      const data = await response.json();
      return data[base];
    } catch (error) {
      console.error('Error loading exchange rates:', error);
      return {};
    }
  },
};

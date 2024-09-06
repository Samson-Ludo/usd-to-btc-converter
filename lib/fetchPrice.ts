import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/simple/price";

export const fetchBTCPrice = async (): Promise<{
  usd: number;
  last_updated: string;
}> => {
  try {
    const response = await axios.get(`${API_URL}?ids=bitcoin&vs_currencies=usd`);
    const data = response.data.bitcoin;
    const lastUpdated = new Date().toLocaleString();

    return {
      usd: data.usd,
      last_updated: lastUpdated,
    };
  } catch (error) {
    throw new Error("Failed to fetch BTC price");
  }
};

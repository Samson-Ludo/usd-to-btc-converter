import React, { useEffect, useState } from "react";
import { fetchBTCPrice } from "../lib/fetchPrice";

const BTCConverter: React.FC = () => {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [usdAmount, setUsdAmount] = useState<number | string>("--");
  const [convertedBTC, setConvertedBTC] = useState<number | string>("--");

  // Fetch the BTC price on component mount
  useEffect(() => {
    const fetchPrice = async () => {
      const { usd, last_updated } = await fetchBTCPrice();
      setBtcPrice(usd);
      setLastUpdated(last_updated);
    };

    fetchPrice();
  }, []);

  // Handle input change and conversion
  const handleUSDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value) || value < 0 || value > 100000000) {
      setUsdAmount("--");
      setConvertedBTC("--");
    } else {
      setUsdAmount(value);
      setConvertedBTC((value / (btcPrice || 1)).toFixed(8)); // Convert USD to BTC
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">USD to BTC Converter</h2>
      <div className="mb-4">
        <p className="text-gray-500">Current BTC Price: </p>
        <p className="text-xl font-semibold">${btcPrice ? btcPrice.toLocaleString() : "--"} USD</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-500">Last Updated: </p>
        <p className="text-xl font-semibold">{lastUpdated || "--"}</p>
      </div>
      <div className="mb-4">
        <label htmlFor="usdAmount" className="block text-gray-700">USD Amount:</label>
        <input
          id="usdAmount"
          type="number"
          placeholder="Enter USD amount"
          className="border border-gray-300 rounded w-full py-2 px-4 mt-1"
          value={usdAmount}
          max={100000000}
          onChange={handleUSDChange}
        />
      </div>
      <div className="mb-4">
        <p className="text-gray-500">Converted BTC Amount:</p>
        <p className="text-xl font-semibold">{convertedBTC}</p>
      </div>
    </div>
  );
};

export default BTCConverter;

import axios from "axios";

async function TerraSummary() {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/near?tickers=true&market_data=true&sparkline=true"
  );
  return res.data;
}

export default TerraSummary;

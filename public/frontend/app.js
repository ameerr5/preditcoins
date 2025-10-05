import { renderChart, updateChart } from "./components/chartComponent.js";
import { renderNews } from "./components/newsComponent.js";

const apiBase = "https://your-backend.onrender.com"; // replace with your FastAPI URL

let chartInstance = null;

document.getElementById("predictBtn").addEventListener("click", async () => {
  const symbol = document.getElementById("coinSelect").value;

  const response = await fetch(`${apiBase}/predict/${symbol}`);
  const data = await response.json();

  document.getElementById("predictionResult").innerHTML =
    `${symbol} → <span>${data.prediction}</span>`;
  document.getElementById("sentimentScore").innerText =
    `Sentiment: ${data.sentiment.toFixed(3)}`;

  // Render chart
  const prices = await fetchBinancePrices(symbol);
  if (!chartInstance)
    chartInstance = renderChart(prices, symbol);
  else
    updateChart(chartInstance, prices);

  // Render news
  renderNews(data.news || []);
});

async function fetchBinancePrices(symbol) {
  const res = await fetch(
    `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m&limit=30`
  );
  const data = await res.json();
  return data.map(k => parseFloat(k[4])); // closing prices
}

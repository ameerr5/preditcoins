import { renderChart, updateChart } from "./components/chartComponent.js";
import { renderNews } from "./components/newsComponent.js";

const apiBase = "https://YOUR_RENDER_BACKEND_URL"; // Replace with your deployed FastAPI URL

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
  const prices = data.prices;
  if (!chartInstance) chartInstance = renderChart(prices, symbol);
  else updateChart(chartInstance, prices);

  // Render news
  renderNews(data.news || []);
});

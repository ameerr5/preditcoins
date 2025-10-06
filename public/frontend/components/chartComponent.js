export function renderChart(prices, symbol) {
  const ctx = document.getElementById("cryptoChart").getContext("2d");
  return new Chart(ctx, {
    type: "line",
    data: { labels: Array(prices.length).fill(""), datasets:[{label:`${symbol}`, data:prices,borderColor:"#22c55e",borderWidth:2,fill:false}] },
    options: { scales:{ x:{ display:false }, y:{ ticks:{ color:"#f8fafc" } } }, plugins:{ legend:{ labels:{ color:"#f8fafc" } } } }
  });
}

export function updateChart(chart, prices) {
  chart.data.datasets[0].data = prices;
  chart.update();
}

export function renderNews(newsArray) {
  const newsList = document.getElementById("newsList");
  newsList.innerHTML = "";

  if (!newsArray.length) {
    newsList.innerHTML = "<li>No recent news found.</li>";
    return;
  }

  newsArray.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `📰 ${item}`;
    newsList.appendChild(li);
  });
}

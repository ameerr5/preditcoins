import requests

def get_latest_news(symbol="bitcoin"):
    url = f"https://newsdata.io/api/1/news?apikey=YOUR_KEY&q={symbol}"
    r = requests.get(url).json()
    headlines = [item['title'] for item in r.get('results', [])]
    return headlines[:5]

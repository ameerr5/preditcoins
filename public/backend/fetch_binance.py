import requests

def get_current_price(symbol="BTCUSDT"):
    url = f"https://api.binance.com/api/v3/klines?symbol={symbol}&interval=1m&limit=30"
    data = requests.get(url).json()
    closes = [float(k[4]) for k in data]
    return closes

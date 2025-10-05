from fastapi import FastAPI
from fetch_binance import get_current_price
from fetch_news import get_latest_news
from sentiment_model import analyze_sentiment
from predictor import predict_trend

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Crypto Predictor API is live!"}

@app.get("/predict/{symbol}")
def predict(symbol: str):
    price_data = get_current_price(symbol)
    news = get_latest_news(symbol)
    sentiment = analyze_sentiment(news)
    trend = predict_trend(price_data, sentiment)
    return {"symbol": symbol, "sentiment": sentiment, "prediction": trend}

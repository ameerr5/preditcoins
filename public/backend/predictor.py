import numpy as np

def predict_trend(prices, sentiment):
    returns = np.diff(prices) / prices[:-1]
    avg_ret = np.mean(returns[-5:])
    if sentiment > 0.2 and avg_ret > 0:
        return "UP 🚀"
    elif sentiment < -0.2 and avg_ret < 0:
        return "DOWN 📉"
    else:
        return "NEUTRAL ⚖️"

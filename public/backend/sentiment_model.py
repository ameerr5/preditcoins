from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
analyzer = SentimentIntensityAnalyzer()

def analyze_sentiment(news_list):
    scores = [analyzer.polarity_scores(n)['compound'] for n in news_list]
    return sum(scores)/len(scores) if scores else 0

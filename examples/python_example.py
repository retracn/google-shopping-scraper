# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-shopping-scraper").call(run_input={
  "queries": [
    "wireless earbuds"
  ],
  "country": "us",
  "maxResultsPerQuery": 50
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("title"), item.get("price"), item.get("store"), item.get("rating"))

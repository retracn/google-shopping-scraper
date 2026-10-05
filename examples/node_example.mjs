// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-shopping-scraper').call({
  "queries": [
    "wireless earbuds"
  ],
  "country": "us",
  "maxResultsPerQuery": 50
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.title, item.price, item.store, item.rating);

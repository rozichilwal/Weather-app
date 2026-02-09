# 🔑 API Key Configuration

## Quick Setup

To use this weather app, you need a free API key from OpenWeatherMap.

### Step 1: Get Your API Key

1. Visit: https://openweathermap.org/api
2. Click "Sign Up" (top right)
3. Fill in the registration form
4. Verify your email
5. Log in and go to "API keys" tab
6. Copy your default API key (or generate a new one)

### Step 2: Add API Key to the App

Open `src/App.js` and find this line (around line 15):

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

Replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
const API_KEY = 'abc123def456ghi789jkl012mno345pq'; // Your actual key
```

### Step 3: Run the App

```bash
npm start
```

---

## Demo API Key (For Testing Only)

If you want to test the app immediately, you can use this demo key (limited usage):

```javascript
const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
```

**⚠️ Important:** This is a shared demo key with limited calls. Please get your own free API key for regular use.

---

## Troubleshooting

### "Invalid API key" error
- Make sure you copied the entire API key
- Check that there are no extra spaces
- New API keys can take 10-15 minutes to activate

### "City not found" error
- Check the spelling of the city name
- Try using just the city name without country
- Some small cities might not be in the database

### Rate limit exceeded
- Free tier allows 1,000 calls/day
- Wait a few minutes or get your own API key

# Weather App - Setup Instructions

This is a responsive weather application built with React that fetches real-time weather data from OpenWeatherMap API.

## 🔑 API Key Setup (Required)

Before running the application, you need to get a free API key from OpenWeatherMap:

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. Click "Sign Up" and create a free account
3. After signing in, go to "API keys" section
4. Copy your API key
5. Open `src/App.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

**Note:** The free tier allows 1,000 API calls per day, which is more than enough for development and testing.

## 🚀 Running the Application

```bash
cd weather-app
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

## ✨ Features

- 🔍 City-based weather search
- 🌡️ Real-time temperature and weather conditions
- 💨 Wind speed and humidity information
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Loading states and error handling
- 🎨 Modern UI with glassmorphism effects

## 🛠️ Technologies Used

- React (with Hooks)
- OpenWeatherMap API
- CSS3 (Glassmorphism, Animations)
- Responsive Design

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

---

Built with ❤️ using React

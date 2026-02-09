# ⚠️ IMPORTANT: API Key Issue

## The Problem

The demo API key included in the app has **exceeded its rate limit** because it's being shared. You're seeing the error:

> "Failed to fetch weather data"

This happens because the OpenWeatherMap API blocks the demo key after too many requests.

## The Solution: Get Your FREE API Key (Takes 2 minutes!)

### Step 1: Sign Up (FREE)
1. Go to: **https://openweathermap.org/api**
2. Click **"Sign Up"** (top right corner)
3. Fill in:
   - Email address
   - Username
   - Password
4. Click **"Create Account"**

### Step 2: Verify Email
1. Check your email inbox
2. Click the verification link from OpenWeatherMap
3. Your account is now active!

### Step 3: Get Your API Key
1. Log in to OpenWeatherMap
2. Click on your username (top right)
3. Select **"My API keys"**
4. You'll see a default API key already created
5. **Copy the API key** (it looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

### Step 4: Add API Key to Your App
1. Open the file: `src/App.js`
2. Find **line 17** (it looks like this):
   ```javascript
   const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
   ```
3. Replace the old key with YOUR new key:
   ```javascript
   const API_KEY = 'YOUR_NEW_API_KEY_HERE';
   ```
4. **Save the file**
5. The app will automatically reload!

### Step 5: Test It!
1. Go back to http://localhost:3000
2. Search for "London" or any city
3. ✅ It should work now!

---

## Quick Copy-Paste Template

Open `src/App.js` and replace line 17 with:

```javascript
const API_KEY = 'PASTE_YOUR_KEY_HERE';
```

---

## Free Tier Limits

✅ **1,000 API calls per day** (plenty for personal use!)  
✅ **60 calls per minute**  
✅ **No credit card required**  
✅ **Never expires**

---

## Troubleshooting

### "Invalid API key" error
- Wait 10-15 minutes after creating your account (new keys need activation time)
- Make sure you copied the entire key (no spaces)
- Check that you saved the file

### Still not working?
- Clear your browser cache (Ctrl+Shift+Delete)
- Restart the dev server:
  ```bash
  # Stop the server (Ctrl+C in terminal)
  npm start
  ```

---

## Need Help?

If you're still having issues, let me know and I can help troubleshoot!

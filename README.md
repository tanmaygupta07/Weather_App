# Weather App

A simple weather app built with **HTML**, **CSS**, and **JavaScript** that provides real-time weather information for any city around the world. The app fetches weather data from the **OpenWeatherMap API** and displays the current temperature, humidity, wind speed, and weather conditions.

## Live Demo

You can view the live version of this weather app at:  
[https://weather-app-pv8g.onrender.com/](https://weather-app-pv8g.onrender.com/)

## Features

- **Search by City**: Users can search for weather information by entering a city name.
- **Displays Key Weather Data**: Shows temperature (in Celsius), humidity, wind speed, and weather description.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Weather Icon**: Displays weather icons based on the conditions (sun, rain, clouds, etc.).

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
  - OpenWeatherMap API (for weather data)

## How It Works

The app uses the **OpenWeatherMap API** to fetch weather data based on the city entered by the user. The JavaScript makes an API request, processes the data, and updates the page to display the weather information.

### Key Features:
- Users enter a city name in the input field.
- The app fetches data from the OpenWeatherMap API using the `fetch` method.
- The weather details (temperature, humidity, wind speed, etc.) are displayed on the page.
- If a city is not found, an error message is shown.

## Setup & Installation

You can easily set up this weather app locally by following these steps:

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari, Edge).

### Clone the repository (Optional)

If you want to clone the repository and run it locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Open the `index.html` file in your browser.

   You don't need any server or backend for this app since it's fully frontend-based.

### API Key

This app uses the **OpenWeatherMap API** to fetch weather data. If you're planning to use it for personal purposes or modifications, you may need to create your own API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

- Once you have your key, you can replace the existing API key in the JavaScript file.

```javascript
const apikey = "YOUR_API_KEY_HERE"; // Replace this with your API key

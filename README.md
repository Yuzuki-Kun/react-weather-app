# ⛅ React Weather App

A modern, responsive weather application built with React that provides real-time weather information for any location around the world.

![React](https://img.shields.io/badge/React-18.x-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Overview

This weather application allows users to search for current weather conditions in any city worldwide. It fetches real-time data from weather APIs and displays temperature, humidity, weather conditions, and forecasts in an intuitive and user-friendly interface.

## ✨ Features

- 🔍 **City Search**: Search for weather by city name
- 🌡️ **Current Weather**: Display current temperature, feels-like temperature, and weather conditions
- 💧 **Detailed Metrics**: View humidity, wind speed, pressure, and visibility
- 📅 **Weather Forecast**: Extended forecast for upcoming days
- 🎨 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌓 **Dynamic Backgrounds**: UI changes based on weather conditions
- ⚡ **Fast & Lightweight**: Optimized performance with React

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0 or higher)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yuzuki-Kun/react-weather-app.git
   cd react-weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up API Key**
   
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_API_KEY=your_api_key_here
   REACT_APP_API_URL=https://api.openweathermap.org/data/2.5
   ```

   To get your API key:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key from the dashboard

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app

## 🛠️ Built With

- **React.js** - A JavaScript library for building user interfaces
- **React Hooks** - useState, useEffect for state management and side effects
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Styling and animations
- **Geolocation API** - Browser location detection

## 📱 Usage

1. **Search by City**: Enter a city name in the search bar and press Enter or click the search button
2. **View Details**: See detailed weather information and forecasts

## 🏗️ Project Structure

```
react-weather-app/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── InfoBox.css
│   ├── InfoBoz.jsx
│   ├── main.jsx
│   ├── SearchBox.css
│   ├── SearchBox.jsx
│   └── WeatherApp.jsx
├── package.json
└── README.md
```

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation!** Ejects from Create React App configuration

## 🌐 API Reference

This application uses the [OpenWeatherMap API](https://openweathermap.org/api):

- **Current Weather Data**: Get current weather data for any location
- **Geocoding API**: Convert city names to coordinates



## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- None at the moment. Please report any bugs in the Issues section.

## 📝 Future Enhancements

- [ ] Add hourly forecast
- [ ] Include weather maps and radar
- [ ] Save favorite locations
- [ ] Support for multiple languages
- [ ] Dark/Light theme toggle
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Air quality index

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yuzuki-Kun**

- GitHub: [@Yuzuki-Kun](https://github.com/Yuzuki-Kun)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- React community for excellent documentation and resources

## 📞 Support

If you like this project, please give it a ⭐ on GitHub!

For questions or issues, please open an issue in the GitHub repository.

---

**Happy Coding! ☀️🌤️⛈️❄️**

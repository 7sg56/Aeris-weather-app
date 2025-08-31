// Search and refresh
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const refreshBtn = document.querySelector('.refresh-btn');

// Location info
const cityName = document.querySelector('.city-name');
const locationDetails = document.querySelector('.location-details');
const currentTime = document.querySelector('.current-time');

// Current weather
const tempValue = document.querySelector('.temp-value');
const tempUnit = document.querySelector('.temp-unit');
const weatherIcon = document.querySelector('.weather-icon img');
const weatherCondition = document.querySelector('.weather-condition');
const feelsLike = document.querySelector('.feels-like');

// Weather stats
const humidityValue = document.querySelector('.stat-value.humidity, .stat-value:contains("Humidity")');
const windValue = document.querySelector('.stat-value.wind, .stat-value:contains("Wind")');
const visibilityValue = document.querySelector('.stat-value.visibility, .stat-value:contains("Visibility")');
const pressureValue = document.querySelector('.stat-value.pressure, .stat-value:contains("Pressure")');

// Hourly and daily forecast containers
const hourlyContainer = document.querySelector('.hourly-container');
const dailyContainer = document.querySelector('.daily-container');

// Additional info
const pm25Value = document.querySelector('.pm25-value');
const pm10Value = document.querySelector('.pm10-value');
const o3Value = document.querySelector('.o3-value');

const sunriseValue = document.querySelector('.sunrise-value');
const sunsetValue = document.querySelector('.sunset-value');

const uvValue = document.querySelector('.uv-index-value');
const uvLevel = document.querySelector('.uv-index-level');
const uvBar = document.querySelector('.uv-index-bar');


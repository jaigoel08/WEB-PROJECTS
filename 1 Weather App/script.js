const API_KEY = '5c977072674542af896144817241709'; // Your WeatherAPI key

const getWeatherUpdate = async (city) => {
    const weather = document.getElementById('weather');
    const container = document.querySelector('.container');
    const body = document.body;

    if (!weather) {
        console.error('Weather element not found!');
        return;
    }

    weather.innerHTML = "<h2>Loading...</h2>";

    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch weather data. Status: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        showWeather(data);

        // Apply background based on weather condition
        applyWeatherBackground(data.current.condition.text.toLowerCase());

        // Show the container with animation
        container.classList.add('show');
    } catch (error) {
        console.error('Error fetching weather data:', error.message || error);
        weather.innerHTML = `<h2 class="error-message">Error loading weather data. Please try again later.</h2>`;
    }
};

function showWeather(data) {
    const weather = document.getElementById('weather');
    weather.innerHTML = `
        <div class="weather-info">
            <h2>Weather in ${data.location.name}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Weather: ${data.current.condition.text}</p>
        </div>`;
}

function applyWeatherBackground(condition) {
    const body = document.body;

    // Remove existing weather classes
    body.classList.remove('sunny', 'cloudy', 'rainy', 'snowy', 'clear-night');

    // Apply class based on condition
    // if (condition.includes('sunny') || condition.includes('clear')) {
    //     body.classList.add('sunny');
    // } else if (condition.includes('cloudy') || condition.includes('overcast')) {
    //     body.classList.add('cloudy');
    // } else if (condition.includes('rain') || condition.includes('drizzle')) {
    //     body.classList.add('rainy');
    // } else if (condition.includes('snow')) {
    //     body.classList.add('snowy');
    // } else if (condition.includes('clear night')) {
    //     body.classList.add('clear-night');
    // }
}
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search');

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const city = searchInput.value;
    getWeatherUpdate(city);
});





const apiKey = 'cD7mFuGzCuay0nhqINg+sQ==yhLrvE0GsUwY8K3z'; 
const latitude = 28.6139;
const longitude = 77.2090;

const URL = `https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`;

const fetchWeatherData = async () => {
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);

        const temperature = data.temp;
        const maxTemp = data.max_temp;
        const minTemp = data.min_temp;
        const humidity = data.humidity;
        const feelsLike = data.feels_like;
        const sunrise = new Date(data.sunrise * 1000).toLocaleTimeString(); 
        const sunset = new Date(data.sunset * 1000).toLocaleTimeString(); 
        const windDirection = data.wind_degrees;
        const windSpeed = data.wind_speed;

        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('max-temp').textContent = `Max Temperature: ${maxTemp}°C`;
        document.getElementById('min-temp').textContent = `Min Temperature: ${minTemp}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
        document.getElementById('feelslike').textContent = `Feels Like: ${feelsLike}°C`;
        document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`;
        document.getElementById('sunset').textContent = `Sunset: ${sunset}`;
        document.getElementById('winddirection').textContent = `Wind Direction: ${windDirection}°`;
        document.getElementById('windspeed').textContent = `Wind Speed: ${windSpeed} m/s`;
        
        document.getElementById('temperature-display').innerHTML = `${temperature}&deg;<small class="text-body-secondary fw-light">C</small>`;
        document.getElementById('humidity-display').innerHTML = `${humidity}<small class="text-body-secondary fw-light">%</small>`;
        document.getElementById('wind-display').innerHTML = `${windSpeed}<small class="text-body-secondary fw-light">km/hr</small>`;
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};


fetchWeatherData();



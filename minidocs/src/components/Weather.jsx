import React, { useState } from 'react';

const Weather = () => {
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleLocation = (e) => {
        setLocation(e.target.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();    
        fetchData(location);
    }

    const fetchData = async (location) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b067a75d34fcbb3812d541ead0747c13`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            console.log("Data fetched successfully");
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input 
                    type="text"
                    placeholder="Enter Location"
                    value={location} 
                    onChange={handleLocation}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {weatherData && (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}   °C </p>
          <p>Condition: {weatherData.current.condition.text} </p>
          <p>Humidity: {weatherData.current.humidity} % </p>
        </div>
      )}
    </div>
       
    );
}

export default Weather;

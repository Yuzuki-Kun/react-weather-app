import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    const API_URL = import.meta.env.VITE_WEATHER_APP_API_URL || import.meta.env.WEATHER_APP_API_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY || import.meta.env.WEATHER_APP_API_KEY;

    let getWeatherInfo = async (query) => {
        try {
            if (!API_URL || !API_KEY) {
                throw new Error("API_URL or API_KEY not configured. Ensure env vars are set (VITE_WEATHER_APP_API_URL / VITE_WEATHER_APP_API_KEY).");
            }
            const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            if (!response.ok) {
                // API returns an error message in the body (e.g., { message: "city not found" })
                throw new Error(jsonResponse.message || "Failed to fetch weather data");
            }
            console.log(jsonResponse);
            let result = {
                city: query,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log("Weather Info: ", result);
            return result;
        } catch (err){
            throw err;
        }
        
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        const query = city.trim();
        if (!query) return;
        try {
            console.log("City name submitted: ", query);
            setCity("");
            setError(false);
            let newInfo = await getWeatherInfo(query);
            updateInfo(newInfo);
        } catch (err) {
            console.error(err);
            setError(true);
        }
        
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>City not found. Please try again.</p>}
            </form>
        </div>
    )
}
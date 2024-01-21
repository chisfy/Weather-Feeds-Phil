import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LocationContext, LocationContextValue } from '../context/locationbuttoncontext.tsx'


// types placed above functions to allow for export
type weatherData = {
  current: {
    temperature_2m: number,
    rain: number,
    snowfall: number,
    weather_code: number
  }
}

type WeatherCodes = {
  0: string,
  1: string,
  2: string,
  3: string,
  45: string,
  48: string,
  51: string,
  53: string,
  55: string,
  56: string,
  57: string,
  61: string,
  63: string,
  65: string,
  66: string,
  67: string,
  71: string,
  73: string,
  75: string,
  77: string,
  80: string,
  81: string,
  82: string,
  85: string,
  86: string,
  95: string,
  96: string,
  99: string
}

export default function Card(): React.JSX.Element {

const { locations, longitude, latitude, showCard, setShowCard, index } = useContext(LocationContext as React.Context<LocationContextValue>)
//setting the state for the weather data, could be an issue with the data not being fetched
//state maybe better as null or undefined
const [data, setData] = useState<weatherData | undefined> (undefined);
const [temp, setTemp] = useState<number>(0);
const [tempScale, setTempScale] = useState<string>("°C");
const [isFahrenheitButtonDisabled, setIsFahrenheitButtonDisabled] = useState<boolean>(false);
const [isCelciusButtonDisabled, setIsCelciusButtonDisabled] = useState<boolean>(true)

// Need to add a button that converts the temperature from Celsius to Fahrenheit
//function works out the conversion but will continue to convert the temperature
//need to make sure it will only convert once
function convertToFahrenheit(): void {
  setTemp(Math.round((temp * 9/5) + 32));
  setTempScale("°F");
  setIsFahrenheitButtonDisabled(true);
  setIsCelciusButtonDisabled(false);
}

// Need to add a button that converts the temperature from Fahrenheit to Celsius
//will still convert the temperature even if it is already in Celsius
function convertToCelcius(): void {
  setTemp(Math.round((temp - 32) * 5/9));
  setTempScale("°C");
  setIsFahrenheitButtonDisabled(false);
  setIsCelciusButtonDisabled(true);
}


//fetch weather data
useEffect(() => {
  // should you try and catch the error here?
  const fetchData = async (): Promise<void> => {
    const result: Response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,snowfall,weather_code&forecast_days=1`);
    const data: weatherData = await result.json();
    setData(data);
    console.log(data);
    setTemp(Math.round(data?.current.temperature_2m));
    setTempScale("°C");
    setIsCelciusButtonDisabled(true);
    setIsFahrenheitButtonDisabled(false)
  };

  fetchData();
}, [longitude, latitude]);

//weather codes
// data includes a weather code,
// weathercode needs to be converted in to the text
//need to extract the data weather code and run it against

const weatherCodes: WeatherCodes = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depostiing Rime Fog",
  51: "Light Drizzle",
  53: "Moderate Drizzle",
  55: "Heavy Drizzle",
  56: "Light Freezing Drizzle",
  57: "Heavy Freezing Drizzle",
  61: "Slight Rain",
  63: "Moderate Rain",
  65: "Heavy Rain",
  66: "Light Freezing Rain",
  67: "Heavy Freezing Rain",
  71: "Slight Snowfall",
  73: "Moderate Snowfall",
  75: "Heavy Snowfall",
  77: "Snow Grains",
  80: "Slight Rain Showers",
  81: "Moderate Rain Showers",
  82: "Violent Rain Showers",
  85: "Light Snow Showers",
  86: "Heavy Snow Showers",
  95: "Slight  or Moderate Thunderstorm",
  96: "Slight Thunderstorm with Hail",
  99: "Heavy Thunderstorm with Hail"

}

return (
  //card shows the data and displays temperature and weather
  <>
  {showCard &&
    <div className="card">
    <h3>{locations[index].city}, {locations[index].country}</h3>
    <img src={locations[index].flag} height={50} width={50} alt="country-flag" />
    <div>
    <h4>Foodie Fact:</h4>
    <p>{locations[index].topRestaurant}</p>
    <p>{locations[index].description}</p>
    <p>{locations[index].address}</p>
    </div>
    <div>
    <h4>Weather:</h4>
    {/* FLAGGED UP ERROR BUT UNSURE */}
    {data?.current && (
      <p>Visibility: {weatherCodes[data.current.weather_code]}</p>
      )}
    {data?.current && (
              <p>Temperature: {temp} {tempScale}</p>
    )}
    {data?.current && data.current.rain > 0 && (
        <p>Rain: {data.current.rain}mm</p>
    )}
    {data?.current && data.current.snowfall > 0 && (
        <p>Snowfall: {data.current.snowfall}mm</p>
    )}
    </div>
    <div>
    <button onClick={() => setShowCard(false)}>X</button>
    <button onClick={() => convertToFahrenheit()} disabled={isFahrenheitButtonDisabled}>Convert to Fahrenheit</button>
    <button onClick={() => convertToCelcius()} disabled={isCelciusButtonDisabled}>Convert to Celcius</button>
    </div>
    </div>}
    </>
  )
}

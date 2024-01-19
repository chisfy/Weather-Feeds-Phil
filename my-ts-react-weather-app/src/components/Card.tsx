import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LocationContext } from '../context/locationbuttoncontext.tsx'


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
  3: string
}

export default function Card(): React.JSX.Element {

const { locations, latitude, longitude, index, setShowCard, showCard } = useContext(LocationContext)
//setting the state for the weather data, could be an issue with the data not being fetched
//state maybe better as null or undefined
const [data, setData] = useState<weatherData | undefined> (undefined);
const [temp, setTemp] = useState<number>(0);
const [tempScale, setTempScale] = useState<string>("°C");

// Need to add a button that converts the temperature from Celsius to Fahrenheit
//function works out the conversion but will continue to convert the temperature
//need to make sure it will only convert once
function convertToFahrenheit(): void {
  setTemp(Math.round((temp * 9/5) + 32));
  setTempScale("°F");
}

// Need to add a button that converts the temperature from Fahrenheit to Celsius
//will still convert the temperature even if it is already in Celsius
function convertToCelcius(): void {
  setTemp(Math.round((temp - 32) * 5/9));
  setTempScale("°C");
}

//fetch weather data
useEffect(() => {
  // should you try and catch the error here?
  const fetchData = async (): Promise<void> => {
    const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,snowfall,weather_code&forecast_days=1`);
    const data = await result.json();
    setData(data);
    console.log(data);
    setTemp(Math.round(data.current.temperature_2m));
    setTempScale("°C");
  };

  fetchData();
}, [longitude, latitude]);

//weather codes
// data includes a weather code,
// weathercode needs to be converted in to the text
//need to extract the data weather code and run it against

const weatherCodes: WeatherCodes ={
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast" 
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
    <button onClick={() => convertToFahrenheit()}>Convert to Fahrenheit</button>
    <button onClick={() => convertToCelcius()}>Convert to Celcius</button>
    </div>
    </div>}
    </>
  )
}

import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { LocationContext } from '../context/locationbuttoncontext.tsx'

export default function Card() {

const { locations, latitude, longitude, index, setShowCard, showCard } = useContext(LocationContext)
const [data, setData] = useState([]);
const [temp, setTemp] = useState(0);
const [tempScale, setTempScale] = useState("°C");

// Need to add a button that converts the temperature from Celsius to Fahrenheit
//function works out the conversion but will continue to convert the temperature
//need to make sure it will only convert once
function convertToFahrenheit() {
  setTemp(Math.round((temp * 9/5) + 32));
  setTempScale("°F");
}

// Need to add a button that converts the temperature from Fahrenheit to Celsius
//will still convert the temperature even if it is already in Celsius
function convertToCelcius() {
  setTemp(Math.round((temp - 32) * 5/9));
  setTempScale("°C");
}

//fetch weather data
useEffect(() => {
  const fetchData = async () => {
    const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,snowfall&forecast_days=1`);
    const data = await result.json();
    setData(data);
    console.log(data);
    setTemp(Math.round(data.current.temperature_2m));
    setTempScale("°C");
  };

  fetchData();
}, [longitude, latitude]);

return (
  //card shows the data and displays temperature and weather
  <>
  {showCard &&
    <div className="card">
    <h3>{locations[index].city}, {locations[index].country}</h3>
    <img src={locations[index].image} height={50} width={50} alt="country-flag" />
    <div>
    <h4>Foodie Fact:</h4>
    <p>{locations[index].topRestaurant}</p>
    <p>{locations[index].description}</p>
    <p>{locations[index].address}</p>
    </div>
    <div>
    <h4>Weather:</h4>
    {/* FLAGGED UP ERROR BUT UNSURE */}
    {data.current && (
              <p>Temperature: {temp} {tempScale}</p>
    )}
    {data.current && data.current.rain > 0 && (
        <p>Rain: {data.current.rain}mm</p>
    )}
    {data.current && data.current.snowfall > 0 && (
        <p>Snowfall: {data.current.snowfall}mm</p>
    )}
    </div>
    <div>
    <button onClick={() => setShowCard(false)}>X</button>
    <button onClick={() => convertToFahrenheit()}>Convert to Fahrenheit</button>
    <button onClick={() => convertToCelcius(false)}>Convert to Celcius</button>
    </div>
    </div>}
    </>
  )
}

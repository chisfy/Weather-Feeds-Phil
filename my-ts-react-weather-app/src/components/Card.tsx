import React from 'react'
import { useContext, useEffect } from 'react'
import { LocationContext } from '../context/locationbuttoncontext.tsx'

export default function Card() {

const { locations, latitude, longitude, index, setShowCard, showCard } = useContext(LocationContext);

//fetch weather data
useEffect(() => {
  const fetchData = async () => {
    const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,snowfall&forecast_days=1`);
    const data = await result.json();
    console.log(data);
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
    </div>
    <div>
    <button onClick={() => setShowCard(false)}>X</button>
    </div>
    </div>}
    </>
  )
}

import React from 'react'
import { useContext } from 'react'
import { LocationContext } from '../context/locationbuttoncontext.tsx'

export default function Card() {

const { locations, latitude, longitude, index } = useContext(LocationContext);

//fetch weather data


return (
  //card shows the data and displays temperature and weather
  <>
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
    </div>
    </>
  )
}

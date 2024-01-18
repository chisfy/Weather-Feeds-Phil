import React from 'react'
import { useContext } from 'react'
import { LocationContext } from '../context/locationbuttoncontext.tsx'
import Card from './Card.tsx';

export default function Locations() {

 //useContext to store the fetched data
const { locations, setLatitude, setLongitude, showCard, setShowCard } = useContext(LocationContext);


//set the latitude and longitude
function setLocation(latitude: number, longitude: number) {
  setLatitude(latitude);
  setLongitude(longitude);
  console.log(latitude, longitude);
  setShowCard(true);
}


return (
    //use the map to create the buttons
    //unsure of why getting error here, buttons still correctly displaying
    <>
    {locations.map((location, index: number) => (
      <button key={index} onClick={() => setLocation(location.latitude, location.longitude)}>
        {location.city}, {location.country}
      </button>
    ))}
    {showCard && <Card />}
  </>
)
}

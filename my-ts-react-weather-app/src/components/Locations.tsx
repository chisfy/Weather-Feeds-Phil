import React from 'react'
import { useContext } from 'react'
import { LocationContext } from '../context/locationbuttoncontext.tsx'
import Card from './Card.tsx';

export default function Locations(): React.JSX.Element {

 //useContext to store the fetched data
const { locations, setLatitude, setLongitude, showCard, setShowCard, setIndex } = useContext(LocationContext);


//set the latitude and longitude, also sets the index for the card
function setLocation(latitude: number, longitude: number, index: number): void {
  setLatitude(latitude);
  setLongitude(longitude);
  console.log(latitude, longitude);
  setShowCard(true);
  setIndex(index);
  console.log(index);
}

return (
    //use the map to create the buttons
    //unsure of why getting error here, buttons still correctly displaying
    <>
    {locations.map((location, index: number) => (
      <button key={index} onClick={() => setLocation(location.latitude, location.longitude, index)}>
        {location.city}, {location.country}
      </button>
    ))}
    {showCard && <Card />}
  </>
)
}

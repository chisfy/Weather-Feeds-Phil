import React from 'react'
import { useContext } from 'react'
import { LocationContext } from '../context/locationbuttoncontext.tsx'

export default function Locations() {

const { locations } = useContext(LocationContext);

//useContext to store the fetched data
//card shows the data and displays temperature and weather

return (
    //use the map to create the buttons
    (locations.map((location) => {
      return (
    //unsure of why getting error here, buttons still correctly displaying
        <button>{location.city}, {location.country}</button>
      )
    }
))
)
}

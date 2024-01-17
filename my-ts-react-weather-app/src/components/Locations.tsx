import React from 'react'

export default function Locations() {

//need to experiment with this
//put locations in a array and map through them
//use the map to create the buttons
//useContext to store the fetched data
//card shows the data anbd siaplys temperature and weather

  return (
    <div className="locations">
      <h3>Locations</h3>
      <ul>
        <li><button>London</button></li>
        <li><button>New York</button></li>
        <li><button>Hong Kong</button></li>
        <li><button>Hawaii</button></li>
        <li><button>Los Angeles</button></li>
      </ul>
    </div>
  )
}

import React from 'react';
import './App.css';
import Time from  './components/Time.tsx'
import Logo from './components/Logo.tsx'
import Footer from './components/Footer.tsx';
import InfoText from './components/InfoText.tsx';
import Locations from './components/Locations.tsx';

function App() {

// looking at building a dynamic background that changes depending on the temperature or region selcted

  return (
    <div className="App">
        <Logo />
        <Time />
        <InfoText />
        <Locations />
        <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Time from  './components/Time.tsx'
import Logo from './components/Logo.tsx'
import Footer from './components/Footer.tsx';
import InfoText from './components/InfoText.tsx';
import Locations from './components/Locations.tsx';
import Card from './components/Card.tsx';

function App() {
  return (
    <div className="App">
        <Logo />
        <Time />
        <InfoText />
        <Locations />
        <Card />
        <Footer />
    </div>
  );
}

export default App;

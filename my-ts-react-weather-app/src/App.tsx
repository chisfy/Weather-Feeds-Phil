import React from 'react';
import './App.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import InfoText from './components/InfoText.tsx';
import Locations from './components/Locations.tsx';

function App(): React.JSX.Element {

// looking at building a dynamic background that changes depending on the temperature or region selcted

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
    <main style={{ flex: 1 }}>
        <InfoText />
        <Locations />
    </main>
        <Footer />
    </div>
  );
}

export default App;

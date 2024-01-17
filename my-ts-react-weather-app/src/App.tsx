import React from 'react';
import './App.css';
import Time from  './components/Time.tsx'
import Logo from './components/Logo.tsx'
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="App">
        <Logo />
        <Time />
      <Footer />
    </div>
  );
}

export default App;

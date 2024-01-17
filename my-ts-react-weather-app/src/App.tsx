import React from 'react';
import './App.css';
import Time from  './components/Time.tsx'
import Logo from './components/Logo.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Time />
      </header>
    </div>
  );
}

export default App;

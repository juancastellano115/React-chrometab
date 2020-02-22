import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'
import Card from './Card.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Card header="Nublado" desc="3°-16°" />
      </header>
      
    </div>
  );
}

export default App;

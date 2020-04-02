import React from 'react';
import './App.css';
import Clock from './Clock.js'
import Tarjetas from './Tarjetas.js';

export default function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Clock />
          <Tarjetas />
        </header>
      </div>
  )
}


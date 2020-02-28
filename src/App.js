import React from 'react';
import './App.css';
import Clock from './Clock.js'
import Card from './Card.js'
import Tarjetas from './Tarjetas.js';

class App extends React.Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <Tarjetas />
          {/* <Card header={this.state.cargando ? "cargando" : this.state.weatherData.city} desc={this.state.cargando ? "cargando" : this.state.weatherData.max + "°" + "-" + this.state.weatherData.min + "°"} /> */}
        </header>
      </div>
    );
  }
}

export default App;

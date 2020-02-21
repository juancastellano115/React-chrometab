import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Cuando se crea el componente
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  // Cuando se borra el componente
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // esta funcion es llamada cada segundo para generar una nueva fecha en el estado "date"
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // Render es llamado cuando se llama al constructor del componente y devuelve return
  render() {
    return (
      <div>
        <img src="img/sol.png" alt=""/>
        <h1>It is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;

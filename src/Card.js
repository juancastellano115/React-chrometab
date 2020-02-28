import React from "react";
import Sol from "./img/sol.png";
import Tilt from "react-tilt";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.Datos = props.datos;
  }

  Datos = Object;
  render() {
    return (
      <Tilt className="card">
        <h2>{this.Datos.city}</h2>
        <i className="fas fa-cloud"></i>
        <p>{this.Datos.max}</p>
        <p>{this.Datos.min}</p>
      </Tilt>
    );
  }
}
export default Card;

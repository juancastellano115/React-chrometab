import React from "react";
import Sol from "./img/sol.png";
import Tilt from "react-tilt";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.Datos = props.datos;
  }
  urlIcono = "https://developer.accuweather.com/sites/default/files/"

  elegirIcono(icon){
    
  let icono = icon>10?icon:"0"+icon;
  console.log(icono)
    return(<img src={this.urlIcono+icono+"-s.png"} alt="icon"></img>)
  }

  Datos = Object;
  render() {
    return (
      <Tilt className="card">
        <h2>{this.Datos.Day.IconPhrase}</h2>
       {this.elegirIcono(this.Datos.Night.Icon)}
    <p>{this.Datos.Temperature.Minimum.Value}º-{this.Datos.Temperature.Maximum.Value}º</p>
      </Tilt>
    );
  }
}
export default Card;

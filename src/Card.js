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

  getDayOfWeek(date){
    let fecha = new Date(date).getDay();
    switch (fecha) {
      case 0:
        return "Domingo"
      case 1:
        return "Lunes"
      case 2:
        return "Martes"
      case 3:
        return "Miercoles"
      case 4:
        return "Jueves"
      case 5:
        return "Viernes"
      case 6:
        return "Sabado"
      default:
        break;
    }
  }
  Datos = Object;
  render() {
    return (
      <Tilt className="card">
        <h3>{this.getDayOfWeek(this.Datos.Date)}</h3>
        <p>{this.Datos.Day.IconPhrase}</p>
       {this.elegirIcono(this.Datos.Night.Icon)}
      <h4>{this.Datos.Temperature.Minimum.Value}º-{this.Datos.Temperature.Maximum.Value}º</h4>
      </Tilt>
    );
  }
}
export default Card;

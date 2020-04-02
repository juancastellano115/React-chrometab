import React from "react";
import Tilt from "react-tilt";

export default function Card({datos}) {
  const urlIcono = "https://developer.accuweather.com/sites/default/files/";

  const elegirIcono = icon=>{
    let icono = icon>10?icon:"0"+icon;
    return(<img src={urlIcono+icono+"-s.png"} alt="icon"></img>)
    }

 const  getDayOfWeek = date => {
    let fecha = new Date(date).getDay();
    switch (fecha) {
      case 0:
        return "Domingo"
      case 1:
        return "Lunes"
      case 2:
        return "Martes"
      case 3:
        return "Miércoles"
      case 4:
        return "Jueves"
      case 5:
        return "Viernes"
      case 6:
        return "Sábado"
      default:
        break;
    }
  }

  return (
    <Tilt className="card">
      <h3>{getDayOfWeek(datos.Date)}</h3>
      <p>{datos.Day.IconPhrase}</p>
      {elegirIcono(datos.Night.Icon)}
      <h4>{datos.Temperature.Minimum.Value}º-{datos.Temperature.Maximum.Value}º</h4>
    </Tilt>
  )
}

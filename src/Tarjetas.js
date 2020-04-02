import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CSSTransition } from 'react-transition-group';
import './transition.css'
export default function Tarjetas() {
  const [cargando, setcargando] = useState(true);
  const [geo, setgeo] = useState("");
  const [city, setcity] = useState("");
  const [weatherData, setweatherData] = useState({});

  const accu = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  let geolocation =
    "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=QG7VY9lNLMTQXghXPt8bUjyGh3H34ztU&language=es-es&details=false&q=";

  useEffect(() => {
    if ("geolocation" in navigator) {
      //Comprobar geolocalización del usuario
      navigator.geolocation.getCurrentPosition(position => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        geolocation += encodeURI(
          position.coords.latitude + "," + position.coords.longitude
        );
        getWeatherData();
      });
    } else {
      console.log("Error al obtener geolocalización");
    }
  }, []);

  useEffect(() => {
    if (geo !== "") {
      let url =
        accu +
        geo +
        "?apikey=QG7VY9lNLMTQXghXPt8bUjyGh3H34ztU&language=es-es&details=false&metric=true";
      async function fetchWeather () {
          
        let response = await fetch(url);
        if (response.ok) {

          let json = await response.json();
          setweatherData({datosTiempo: json.DailyForecasts, headline: json.Headline})
          setcargando(false)
        }
      }
      fetchWeather()
    }
  }, [geo]);
  const getWeatherData = async () => {
    await fetch(geolocation).then(async res => {
      if (res.ok) {
        let datoslocalizacion = await res.json();
        setgeo(datoslocalizacion.Key);
        setcity(datoslocalizacion.LocalizedName);
      }
    });
  };
  return (
    <div>
      {cargando ? (
        "Cargando..."
      ) : (
        <div>
          <h1>{city}</h1>
          <p>{weatherData.headline.Text}</p>
          <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <div className="contenedorTarjetas">
            {weatherData.datosTiempo.map((tarjeta,index) => (
              <Card datos={tarjeta} key={index} />
            ))}
          </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
}

import React from "react";
import Card from "./Card";

class Tarjetas extends React.Component {
  url =
    "http://api.openweathermap.org/data/2.5/weather?appid=19959cc224bcd5fca2667dda06dd0e66&units=metric";
  accu = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  geolocation =
    "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=QG7VY9lNLMTQXghXPt8bUjyGh3H34ztU&language=es-es&details=false&q=";

  constructor() {
    super();
    this.state = { cargando: true };
  }
  componentDidMount() {
    if ("geolocation" in navigator) {
      //check Geolocation available

      navigator.geolocation.getCurrentPosition(position => {
        this.geolocation += encodeURI(
          position.coords.latitude + "," + position.coords.longitude
        );
        this.getWeatherData();
      });
    } else {
      console.log("Error al obtener geolocalización");
    }
  }

  async getWeatherData() {
    await fetch(this.geolocation).then(async res => {
      if (res.ok) {
        let datoslocalizacion = await res.json();
        this.setState({
          geo: datoslocalizacion.Key,
          city: datoslocalizacion.LocalizedName
        });
      }
    });
    let url =
      this.accu +
      this.state.geo +
      "?apikey=QG7VY9lNLMTQXghXPt8bUjyGh3H34ztU&language=es-es&details=false&metric=true";
    console.log(url);
    let response = await fetch(url);
    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
      this.setState({ weatherData: json.DailyForecasts });
      this.setState({ headline: json.Headline });

      this.setState({ cargando: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.cargando ? (
          "cargando"
        ) : (
          <div>
            <h1>{this.state.city}</h1>
            <p>{this.state.headline.Text}</p>
            <div className="contenedorTarjetas">
            {this.state.weatherData.map(tarjeta => (
              <Card datos={tarjeta} />
            ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Tarjetas;

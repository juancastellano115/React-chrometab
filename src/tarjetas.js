import React from 'react';
import Card from './Card';
import { render } from '@testing-library/react';


class Tarjetas extends React.Component {


    url = "http://api.openweathermap.org/data/2.5/weather?appid=19959cc224bcd5fca2667dda06dd0e66&units=metric"

    constructor() {
        super();
        this.state = { cargando: true };
    }
    componentDidMount() {
        if ("geolocation" in navigator) { //check Geolocation available
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({ geoLat: position.coords.latitude, geoLong: position.coords.longitude });
                this.getWeatherData();
            });
        } else {
            this.setState({ geoLat: 40.578626299999996, geoLong: -3.2488459 });
            this.getWeatherData();
        }

    }

    async getWeatherData() {
        let response = await fetch(this.url + "&lat=" + this.state.geoLat + "&lon=" + this.state.geoLong);
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            let modeledObject = { city: json.name, max: json.main.temp_max, min: json.main.temp_min }
            this.setState({ weatherData: modeledObject });

            this.setState({ cargando: false });
        }
    }
    render() {
        return (
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}

export default Tarjetas;
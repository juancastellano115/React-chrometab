import React from 'react';
import Sol from './img/sol.png'
import Tilt from 'react-tilt'

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tilt className='card'>
                
                <h1>Tarjetita to cremas</h1>
            </Tilt>
        );

    }
}
export default Card;
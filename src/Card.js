import React from "react";
import Sol from "./img/sol.png";
import Tilt from "react-tilt";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tilt className="card">
        <h2>{this.props.header}</h2>
        <i class="fas fa-cloud"></i>
        <p>{this.props.desc}</p>
      </Tilt>
    );
  }
}
export default Card;

import React, { Component } from "react";
import "./components/card-list/card-list.styles.css";
import "./components/card/card.styles.css";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyModal2 } from "./MyModal2";
import { MyModal3 } from "./MyModal3";
import { MyModal4 } from "./MyModal4";
import { MyModal5 } from "./MyModal5";
import { MyModal6 } from "./MyModal6";
import { MyModal7 } from "./MyModal7";
import { Modal } from "react-bootstrap";
import I1 from "./4Seater.jpg";
import I2 from "./4Seater2.jpg";
import I3 from "./7Seater.jpg";
import I4 from "./9Seater.jpg";
import I5 from "./LCars.jpg";
import I6 from "./LCars2.jpg";

export class Carlist2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="sho">
          <Link to={"/Carlist"}>
            <button>Prev</button>
          </Link>
        </div>
        <div className="card-container">
          <div className="card-list">
            <img src={I4} />
            <h1> 9 Seater Car </h1>
            <MyModal5></MyModal5>
          </div>
        </div>
        <div className="card-container">
          <div className="card-list">
            <img src={I5} />
            <h1> Luxury Car </h1>
            <MyModal6></MyModal6>
          </div>
        </div>
        <div className="card-container">
          <div className="card-list">
            <img src={I6} />
            <h1> Luxury Car </h1>
            <MyModal7></MyModal7>
          </div>
        </div>
      </div>
    );
  }
}

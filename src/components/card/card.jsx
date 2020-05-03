import React from "react";
import "./card.styles.css";
import { Button, ButtonToolbar } from "react-bootstrap";

//import { MyModal } from "./MyModal";

export const Card = (props) => (
  <div className="card-container">
    {props.cars.image}
    <h1>{props.cars.name}</h1>
    <button>book now</button>
  </div>
);

import React, { useState } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import I6 from "./LCars2.jpg";
import Modal from "react-modal";
import "./MyModal.styles.css";
import { Link } from "react-router-dom";
export function Mymodal8() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ButtonToolbar>
      <Button onClick={() => setModalIsOpen(true)}>Book Now</Button>
      <Modal isOpen={modalIsOpen}>
        <div className="MyModal">
          <div>
            <img src={I6} />
          </div>
          <h1>
            Booking Successful! Click The Button Below to book another car
          </h1>

          <div className="show">
            <Link to={"/"}>
              <button onClick={() => setModalIsOpen(false)}>close</button>
            </Link>
          </div>
        </div>
      </Modal>
    </ButtonToolbar>
  );
}

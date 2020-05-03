import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class MyModal extends Component {
  constructor(props) {
    super(props);
  }

  rendor() {
    return (
      <>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">Deatils</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

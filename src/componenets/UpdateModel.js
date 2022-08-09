import React from "react";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Updateform from "./Updateform";

const UpdateModel = (props) => {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Registration
        </Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Updateform vehicle={props.vehicle} />
      </ModalBody>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModel;
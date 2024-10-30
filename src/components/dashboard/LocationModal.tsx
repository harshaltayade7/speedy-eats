import React from "react";
import { Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleLocationModal } from "../../store/slices/navbarSlice";

const LocationModal: React.FC = () => {
  const { locationModelOpen } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();

  return (
    <Modal
      show={locationModelOpen}
      onHide={() => dispatch(toggleLocationModal())}
    >
      <Modal.Header closeButton>
        <Modal.Title>Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You have selected Pune as your location.</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => dispatch(toggleLocationModal())}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default LocationModal;

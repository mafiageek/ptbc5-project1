import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import MapContainer from "./MapContainer";
import "./AddJournal.css";

export default function AddJournal(props) {
  const [enteredJournal, setEnteredJournal] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredImageURL, setEnteredImageURL] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [show, setShow] = useState(false);

  const [currentPosition, setCurrentPosition] = useState({
    lat: 41.3851,
    lng: 2.1734,
  });

  const onMarkerDragEnd = (e) => {
    const lat = parseFloat(e.latLng.lat());
    const lng = parseFloat(e.latLng.lng());
    setCurrentPosition({ lat, lng });
    console.log(currentPosition);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const addJournalHandler = (event) => {
    setShow(false);
    // if you would only have an object for storing state and updating the different properties as needed, you could just pass one object to the function and wouldn't need to type so much and could work a bit more dynamically. You would also reduce the amount of state updates by a lot.
    props.onAddJournal(
      enteredImageURL,
      enteredCountry,
      enteredJournal,
      enteredDate,
      parseFloat(currentPosition.lat),
      parseFloat(currentPosition.lng)
    );
    setEnteredJournal("");
    setEnteredCountry("");
    setEnteredImageURL("");
    setEnteredDate("");
    setCurrentPosition({
      lat: "",
      lng: "",
    });
  };

  // like this you could have a dynamic change handler, that updates the field depending on the input name attribute
  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setJournal({ [name]: value })
  }

  const journalChangeHandler = (event) => {
    setEnteredJournal(event.target.value);
  };

  const countryChangeHandler = (event) => {
    setEnteredCountry(event.target.value);
  };

  const imageURLChangeHandler = (event) => {
    setEnteredImageURL(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <div className="addjournal">
      <Button variant="outline-dark" onClick={handleShow} size="sm">
        Add New
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Travel Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* The Form.Group is repetitive. We could create an array of objects containing the different data and run a map to create this code. We could also create a FormGroup component that you could reuse to render this stuff.
            <FormGroup controlId={...} label="abdbas" value={...} autofocus={true} />
            <FormGroup controlId={...} label="abdbas" value={...} autofocus={false} />
            <FormGroup controlId={...} label="abdbas" value={...} autofocus={true} as="" rows={1} />

            in your FormGroup component you could just pass all props but controlId to the Form.Control

            const FormGroup = ({controlId, label, ...props}) => {
              return (
                <Form.Group className="mb-3" controlId={controlId}>
                  <Form.Label>{label}</Form.Label>
                  <Form.Control ...props />
                </Form.Group>
              )
            }


            */}
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                onChange={imageURLChangeHandler}
                value={enteredImageURL}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                onChange={countryChangeHandler}
                value={enteredCountry}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="journal">
              <Form.Label>Journal</Form.Label>
              <Form.Control
                as="textarea"
                onChange={journalChangeHandler}
                value={enteredJournal}
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={dateChangeHandler}
                value={enteredDate}
                autoFocus
              />
            </Form.Group>
            <MapContainer
              onMarkerDragEnd={onMarkerDragEnd}
              currentPosition={currentPosition}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} size="sm">
            Close
          </Button>
          <Button variant="info" onClick={addJournalHandler} size="sm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

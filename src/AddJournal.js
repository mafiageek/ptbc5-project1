import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./AddJournal.css";

export default function AddJournal(props) {
  const [enteredJournal, setEnteredJournal] = useState("");
  const [enteredCountry, setEnteredCountry] = useState("");
  const [enteredImageURL, setEnteredImageURL] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const addJournalHandler = (event) => {
    setShow(false);
    props.onAddJournal(
      enteredImageURL,
      enteredCountry,
      enteredJournal,
      enteredDate
    );
    setEnteredJournal("");
    setEnteredCountry("");
    setEnteredImageURL("");
  };

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

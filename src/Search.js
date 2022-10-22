import "./Search.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Search(props) {
  return (
    <>
      <InputGroup className="mb-3 search">
        <Form.Control
          placeholder="Enter Country"
          onChange={(event) => props.handleSearch(event)}
          value={props.query}
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </>
  );
}

import "./Search.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// from what I can see this Search component is incomplete and does not offer full functionality. I think we shouldn't push code that does not work. If you had trouble with the implementation, you should have used the query in your app js to pass the .filter list down to your list display. Problem here is you might need to deal with default data and the filtered data at once. 
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

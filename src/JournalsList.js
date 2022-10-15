import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function JournalsList(props) {
  return (
    <div className="cards">
      {props.journals.map((journal) => (
        <Card key={journal.id} style={{ width: "50%" }}>
          <Card.Img src={journal.imageURL} variant="top" />
          <Card.Body>
            <Card.Title>{journal.country}</Card.Title>
            <Card.Text>{journal.journal}</Card.Text>
            <Button
              variant="outline-dark"
              size="sm"
              onClick={(event) => props.handleDelete(event, journal.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

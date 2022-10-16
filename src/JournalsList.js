import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function JournalsList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="cards col-9">
          {props.journals.map((journal) => (
            <Card key={journal.id}>
              <Card.Img src={journal.imageURL} variant="top" />
              <Card.Body>
                <Card.Title>{journal.country}</Card.Title>
                <Card.Text>{journal.journal}</Card.Text>
                <Card.Text>{journal.date}</Card.Text>
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
      </div>
    </div>
  );
}

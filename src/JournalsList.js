import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GoogleMap, Marker } from "@react-google-maps/api";

export default function JournalsList(props) {
  const mapStyles = {
    height: "20vh",
    width: "100%",
  };
  const center = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const filteredResult = props.journals.filter((post) => {
    if (!props.query) {
      return post;
    } else if (post.country.toLowerCase().includes(props.query.toLowerCase())) {
      return post;
    }

    return post;
  });

  return (
    <div className="container">
      <div className="row">
        {filteredResult.map((journal) => (
          <div key={journal.id} className="cards col-sm-6 col-md-4">
            <Card>
              {console.log("Card", journal.position)}
              <Card.Img src={journal.imageURL} variant="top" />
              <GoogleMap
                zoom={10}
                mapContainerStyle={mapStyles}
                center={center}
              >
                {journal.position.lat ? (
                  <Marker position={journal.position} />
                ) : null}
              </GoogleMap>
              <Card.Body>
                <Card.Title>{journal.country}</Card.Title>
                <Card.Text>{journal.journal}</Card.Text>
                <Card.Text>{journal.date}</Card.Text>

                <Card.Footer>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={(event) => props.handleDelete(event, journal.id)}
                  >
                    Delete
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

import Carousel from "react-bootstrap/Carousel";
import snow from "./snow.jpg";
import mountain from "./mountain.jpg";
import house from "./house.jpg";

export default function Jumbotron() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={snow} alt="First slide" />
        <Carousel.Caption>
          <h3>A walk in the snow</h3>
          <p>
            why focus on the negative when we can throw on our snow boots and go
            out to enjoy the beautiful snowy weather.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={mountain} alt="Second slide" />
        <Carousel.Caption>
          <h3>The mountains are calling and I must go</h3>
          <p>
            I see every person as a mountain of sorts; we can see how they look
            from afar, but will never know them until we explore.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={house} alt="Third slide" />
        <Carousel.Caption>
          <h3>To live in a gingerbread house</h3>
          <p>
            A home is the physical embodiment of the people who inhabit it, so
            it's no wonder that it's such a special place for so many.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

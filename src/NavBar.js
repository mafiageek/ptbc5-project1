import "./NavBar.css";
import logo from "./antlogo.png";

import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="justify-content-center">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="logo" />
          <span>TravelANT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

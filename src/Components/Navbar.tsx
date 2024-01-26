import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/small logo.png";
import { Button } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="dark"
      variant="dark" // Add variant="dark" to make the navbar dark-themed
      style={{ width: "100%" }}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Item>
            <Navbar.Brand href="/">
              <img
                src={Logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="PartyPic logo"
              />
            </Navbar.Brand>
          </Nav.Item>
          <Nav.Item style={{ fontWeight: "bold" }}>
            <Nav.Link href="/"> events </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ fontWeight: "bold" }}>
            <Nav.Link href="search" color="white">
              search{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button variant="light">Create</Button>
          </Nav.Item>
          <Nav.Item
            className="ms-auto"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            <Button variant="light">Sign up</Button>
          </Nav.Item>
          <Nav.Item style={{ marginRight: "10px", marginBottom: "10px" }}>
            <Button variant="light">Sign In</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;

import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar className="navbar navbar-expand-lg" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          Arska-Çiftlik
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={NavLink} to="/" exact>
              Ana sayfa
            </Nav.Link>
            <NavDropdown title="Ürünlerimiz" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/about">
              Hakkımızda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/production">
              Üretim
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              İletişim
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

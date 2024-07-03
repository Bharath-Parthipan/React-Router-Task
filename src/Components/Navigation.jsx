import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">LearnFusion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact to="/">All</Nav.Link>
            <Nav.Link as={NavLink} to="/career">Career</Nav.Link>
            <Nav.Link as={NavLink} to="/full-stack-development">Full Stack Development</Nav.Link>
            <Nav.Link as={NavLink} to="/data-science">Data Science</Nav.Link>
            <Nav.Link as={NavLink} to="/cyber-security">Cyber Security</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


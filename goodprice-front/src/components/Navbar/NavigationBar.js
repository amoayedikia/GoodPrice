import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import UserAvatar from "./components/UserAvatar/UserAvatar";
import './NavigationBar.scss';

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
    <Container className="navigation">
      <Navbar.Brand href="">Good Price</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">About Us</Nav.Link>
          <Nav.Link href="">FAQ</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-4"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
        <div className="space"></div>
        <UserAvatar />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;

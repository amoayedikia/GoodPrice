import React from 'react';
import { 
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import UserAvatar from './components/UserAvatar/UserAvatar';
import './NavigationBar.scss';

const NavigationBar = () => (
/*    <>
        <Navbar bg="light" variant="light" sticky="top">
            <Container className="navigation">
                <Navbar.Brand href="">Good Price</Navbar.Brand>
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
                <UserAvatar />
            </Container>
        </Navbar>
    </>*/
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home">Good Price</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="">About Us</Nav.Link>
        <Nav.Link href="">FAQ</Nav.Link>
    </Nav>
    <Nav>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-4"
                aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
        </Form>
        <UserAvatar />
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
);

export default NavigationBar;
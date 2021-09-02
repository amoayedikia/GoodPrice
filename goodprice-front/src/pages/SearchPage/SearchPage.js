import React from 'react';
import { 
    Container,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
import NavigationBar from '../../components/Navbar/NavigationBar';

const SearchPage = () => (
    <div>
        <NavigationBar />
        <Container>
            <div>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </div>
            <Container>
                <Nav variant="pills" activeKey="1">
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="#/home">
                        NavLink 1 content
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" title="Item">
                        NavLink 2 content
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" disabled>
                        NavLink 3 content
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Container>
    </div>
);

export default SearchPage;
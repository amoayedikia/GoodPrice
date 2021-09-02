import React from 'react';
import { 
    Container,
    Nav,
} from 'react-bootstrap';
import NavigationBar from '../../components/Navbar/NavigationBar';
import SearchBar from '../../components/FilterSearch/SearchBar';
import ProductPanel from '../../components/ProductPanel/ProductPanel';
import './SearchPage.scss';

const SearchPage = () => (
    <div>
        <NavigationBar />
        <Container className="content">
            <div className="filter-vertical">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </div>
            <Container className="searchbar-horizontal">
                <SearchBar />
                <ProductPanel />
            </Container>
        </Container>
    </div>
);

export default SearchPage;
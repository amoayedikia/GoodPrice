import React from 'react';
import {
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import Dropdowns from './components/Dropdowns/Dropdowns';
import './SearchBar.scss';

const SearchBar = () => (
    <Nav variant="pills" className="search">
        <Dropdowns />
        <Form className="d-flex search__form">
            <FormControl
                type="search"
                placeholder="Search products"
                className="mr-4"
                aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
        </Form>
    </Nav>
);

export default SearchBar;
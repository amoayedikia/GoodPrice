import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './Dropdowns.scss';

const Dropdowns = () => {

    const [value, setValue]=useState('');
    const handleSelect = (e) => {
        setValue(e);
    }
    console.log(value);

    return (
        <>
            <DropdownButton variant="light" title="SORT PRODUCTS BY" id="dropdown-basic-button" border-color="primary" onSelect={handleSelect}>
                <Dropdown.Item eventKey="Relevancy">Relevancy</Dropdown.Item>
                <Dropdown.Item eventKey="Price: Low - High">Price: Low - High</Dropdown.Item>
                <Dropdown.Item eventKey="Price: High - Low">Price: High - Low</Dropdown.Item>
                <Dropdown.Item eventKey="New - Old">New - Old</Dropdown.Item>
                <Dropdown.Item eventKey="Old - New">Old - New</Dropdown.Item>
                <Dropdown.Item eventKey="Title: A - Z">Title: A - Z</Dropdown.Item>
                <Dropdown.Item eventKey="Title: Z - A">Title: Z - A</Dropdown.Item>
            </DropdownButton>
            <div className="value" border-color="primary">{value}</div>
        </>
    );
}

export default Dropdowns;

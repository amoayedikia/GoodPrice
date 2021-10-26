import React from 'react'
import { Nav, Form, FormControl, Button } from 'react-bootstrap'

import './SearchBar.scss'
import './Filter.scss'

const SearchBar = ({ search, reset, placeholder, value }) => (
  <div className='filter-vertical'>
    <Nav variant='pills' className='search'>
      {/*<Dropdowns />*/}
      <Form className='d-flex search__form'>
        <FormControl
          type='search'
          placeholder={placeholder}
          className='mr-4'
          aria-label='Search'
          value={value}
          onChange={search}
        />
      </Form>
    </Nav>
  </div>
)

export default SearchBar

import React from 'react'
import { Nav, Form, FormControl, Button } from 'react-bootstrap'
import Dropdowns from './components/Dropdowns/Dropdowns'
import './SearchBar.scss'

const SearchBar = ({ search, reset, placeholder, value }) => (
  <Nav variant='pills' className='search'>
    <div className='currentlocation'>Your location: Hawthorn VIC 3122</div>
    <Dropdowns />
    <Form className='d-flex search__form'>
      <FormControl
        type='search'
        placeholder={placeholder}
        className='mr-4'
        aria-label='Search'
        value={value}
        onChange={search}
      />
      <Button variant='primary' onClick={reset}>
        Reset
      </Button>
    </Form>
  </Nav>
)

export default SearchBar

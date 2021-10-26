import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './Sorter.scss'
import './Filter.scss'

const Sorter = ({ value, filter }) => {
  return (
    <div className='filter-vertical'>
      <Form.Select
        aria-label='Default select example'
        className='my-3'
        value={value}
        onChange={(e) => filter(e.target.value)}
      >
        <option value='default'>Sort By</option>
        <option value='price_asc'>Price - Low to High</option>
        <option value='price_desc'>Price - High to Low</option>
        <option value='name_asc'>Name - A to Z</option>
        <option value='name_desc'>Name - Z to A</option>
      </Form.Select>
    </div>
  )
}

export default Sorter

import React from 'react'
import './Filter.scss'
import { Card, Form } from 'react-bootstrap'

const PriceFilter = ({ value, filter }) => {
  return (
    <div className='filter-vertical'>
      <Card border-color='primary' className='filtercard'>
        <Card.Body>
          <Card.Title>Price</Card.Title>
          <Form.Check
            type='radio'
            label='All'
            value='all'
            checked={value === 'all' ? true : false}
            onChange={() => filter('all')}
          />
          <Form.Check
            type='radio'
            label='Up to $100'
            value='100'
            checked={value === '100' ? true : false}
            onChange={() => filter('100')}
          />
          <Form.Check
            type='radio'
            label='$101 to $300'
            value='300'
            checked={value === '300' ? true : false}
            onChange={() => filter('300')}
          />
          <Form.Check
            type='radio'
            label='$301 to $500'
            value='500'
            checked={value === '500' ? true : false}
            onChange={() => filter('500')}
          />
          <Form.Check
            type='radio'
            label='$501 to $1000'
            value='1000'
            checked={value === '1000' ? true : false}
            onChange={() => filter('1000')}
          />
          <Form.Check
            type='radio'
            label='Over $1000'
            value='2000'
            checked={value === '2000' ? true : false}
            onChange={() => filter('2000')}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default PriceFilter

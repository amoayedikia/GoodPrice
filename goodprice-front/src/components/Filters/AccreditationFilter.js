import React from 'react'
import './Filter.scss'
import { Form, Card } from 'react-bootstrap'

const AccreditationFilter = ({ value, filter }) => {
  return (
    <div className='filter-vertical'>
      <Card border-color='primary' className='filtercard'>
        <Card.Body>
          <Card.Title>GOOD PRICE ACCREDITATION</Card.Title>

          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              type='radio'
              label='All'
              value='all'
              checked={value === 'all' ? true : false}
              onChange={() => filter('all')}
            />
            <Form.Check
              type='radio'
              label='Goodprice Accredited'
              value='yes'
              checked={value === 'yes' ? true : false}
              onChange={() => filter('yes')}
            />
            <Form.Check
              type='radio'
              label='Not Accredited'
              value='no'
              checked={value === 'no' ? true : false}
              onChange={() => filter('no')}
            />
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AccreditationFilter

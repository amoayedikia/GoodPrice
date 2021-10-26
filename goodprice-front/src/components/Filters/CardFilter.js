import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, Card } from 'react-bootstrap'
import './Filter.scss'

const CardFilter = ({ filter, categories }) => {
  const productDetails = useSelector((state) => state.productDetails)
  const { productCategories } = productDetails

  return (
    <div className='filter-vertical'>
      <Card border-color='primary' className='filtercard'>
        <Card.Body>
          <Card.Title>PRODUCT CATEGORY</Card.Title>
          {productCategories.map((p) => (
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                type='checkbox'
                label={p.product_category}
                value={p.product_category}
                onChange={() => filter(p.product_category)}
                checked={categories.includes(p.product_category)}
              />
            </Form.Group>
          ))}
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardFilter

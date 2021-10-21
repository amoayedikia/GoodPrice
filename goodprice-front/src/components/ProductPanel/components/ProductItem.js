import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Card, Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {
  addToCompareList,
  removeFromCompareList,
} from '../../../actions/product-actions'
//import './ProductItem.scss'

const ProductItem = ({ name, description, price, supplier, id, photo }) => {
  const productDetails = useSelector((state) => state.productDetails)
  const { compareProducts } = productDetails

  const dispatch = useDispatch()

  const handleCompare = (id) => {
    console.log(compareProducts)
    if (compareProducts)
      if (compareProducts.includes(id)) {
        dispatch(removeFromCompareList(id))
      } else {
        dispatch(addToCompareList(id))
      }
  }

  return (
    <Col lg={4} md={12}>
      <Card className='product__card m-2' border-color='primary'>
        <Card.Img variant='top' src={`${photo}`} className='product__image' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <hr />
          <div>
            <h3>{price} AU$</h3>
          </div>
          <div>{supplier}</div>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Compare'
              onChange={() => handleCompare(id)}
              checked={compareProducts.includes(id)}
            />
          </Form.Group>
          <div>
            <LinkContainer to={`/products/${id}`}>
              <Button variant='primary' className='product__button'>
                View Product
              </Button>
            </LinkContainer>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductItem

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Alert } from 'react-bootstrap'
import ProductItem from './components/ProductItem'
//import './ProductItems.scss'

const ProductItems = ({ name, categories, accreditation, price }) => {
  const productDetails = useSelector((state) => state.productDetails)
  const {
    products: { Items },
    filteredProducts,
  } = productDetails

  return (
    <Container className='product__container'>
      <Row>
        {name !== '' ||
        categories.length > 0 ||
        accreditation !== 'all' ||
        price !== 'all' ? (
          filteredProducts.length === 0 ? (
            <Alert variant='danger'>
              <Alert.Heading>NO PRODUCTS FOUND!</Alert.Heading>
              <p>None of the Products match your search Criteria</p>
            </Alert>
          ) : (
            filteredProducts.map((i) => (
              <ProductItem
                id={i.product_id}
                photo={i.photo_url}
                name={i.product_name}
                description={i.product_description}
                price={i.product_price}
                supplier={i.supplier_name}
                accrediation={i.accreditation}
              />
            ))
          )
        ) : (
          Items.map((i) => (
            <ProductItem
              id={i.product_id}
              photo={i.photo_url}
              name={i.product_name}
              description={i.product_description}
              price={i.product_price}
              supplier={i.supplier_name}
              accreditation={i.accreditation}
            />
          ))
        )}
      </Row>
    </Container>
  )
}

export default ProductItems

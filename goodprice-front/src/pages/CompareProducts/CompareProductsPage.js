import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import NavigationBar from '../../components/Navbar/NavigationBar'
import { LinkContainer } from 'react-router-bootstrap'

const CompareProductsPage = () => {
  const productDetails = useSelector((state) => state.productDetails)
  const {
    compareProducts,
    products: { Items },
  } = productDetails

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <LinkContainer to='/' className='mt-3'>
              <Button variant='primary'>Back</Button>
            </LinkContainer>
          </Col>
        </Row>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Attributes</th>
                {Items.filter((i) =>
                  compareProducts.includes(i.product_id)
                ).map((p) => (
                  <th>{p.product_name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {' '}
                <th>Price</th>
                {Items.filter((i) =>
                  compareProducts.includes(i.product_id)
                ).map((p) => (
                  <td>AU$ {p.product_price} </td>
                ))}
              </tr>
              <tr>
                {' '}
                <th>Discount</th>
                {Items.filter((i) =>
                  compareProducts.includes(i.product_id)
                ).map((p) => (
                  <td>AU$ {p.product_discount} </td>
                ))}
              </tr>
              <tr>
                {' '}
                <th>Price after Discount</th>
                {Items.filter((i) =>
                  compareProducts.includes(i.product_id)
                ).map((p) => (
                  <td>AU$ {p.product_price - p.product_discount} </td>
                ))}
              </tr>
              <tr>
                {' '}
                <th>Stock Available</th>
                {Items.filter((i) =>
                  compareProducts.includes(i.product_id)
                ).map((p) => (
                  <td>{p.stock_status} </td>
                ))}
              </tr>
              <tr>
                {' '}
                <th>Category</th>
                {Items.filter((i) =>
                  compareProducts.includes(i.product_id)
                ).map((p) => (
                  <td>{p.product_category} </td>
                ))}
              </tr>
              <tr>
                {' '}
                <th>Supplied By</th>
                {Items.filter((i) =>
                  compareProducts.includes(i.product_id)
                ).map((p) => (
                  <td>{p.supplier_id} </td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  )
}

export default CompareProductsPage

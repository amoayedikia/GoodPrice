import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import NavigationBar from '../../components/Navbar/NavigationBar'
import { LinkContainer } from 'react-router-bootstrap'
import {
  deleteProduct,
  getProductCategories,
  getProductList,
} from '../../actions/product-actions'
import Popup from '../../components/Popup'
import {
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_RESET,
} from '../../constants/product-constants'
import Message from '../../components/Message/Message'

const ListProducts = () => {
  let counter = 1
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const {
    products: { Items },
    loading,
    products,
    error,
    deleted,
  } = productDetails

  const [deleteId, setDeleteId] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [confirmationModal, setConfirmationModal] = useState(false)

  const handleDeleteConfirmation = (id) => {
    setDeleteId(id)
    setConfirmationModal(true)
  }

  const handleDelete = () => {
    //alert(deleteId)
    setConfirmationModal(false)
    dispatch(deleteProduct(deleteId))
  }

  useEffect(() => {
    dispatch(getProductList())
  }, [deleted, Items.length])

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          {error ? <Message variant='danger'>{error}</Message> : null}
          <Col>
            <LinkContainer to='/admin/create-product'>
              <Button variant='primary' className='my-3'>
                Create New Product
              </Button>
            </LinkContainer>
          </Col>
        </Row>
        {confirmationModal ? (
          <Popup
            title='Product Deletion'
            body='Are you sure you want to delete this product?'
            type='confirm'
            onClose={() => setConfirmationModal(false)}
            onConfirm={handleDelete}
          />
        ) : null}
        {deleted ? (
          <Popup
            title='Product Deletion'
            body='Product deleted successfully'
            type='success'
            onClose={() => dispatch({ type: DELETE_PRODUCT_RESET })}
          />
        ) : null}
        <Row>
          <Col>
            <Table className='table-striped table-hover'>
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Product Price</th>
                  <th>Inventory Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {Items.map((i) => (
                  <tr>
                    <td>{counter++}</td>
                    <td>{i.product_name}</td>
                    <td>{i.product_category}</td>
                    <td>{i.product_price} AU$</td>
                    <td>{i.stock_status}</td>
                    <td>
                      <LinkContainer to='/'>
                        <Button variant='warning'>Edit</Button>
                      </LinkContainer>
                    </td>
                    <td>
                      <Button
                        variant='danger'
                        onClick={() => handleDeleteConfirmation(i.product_id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ListProducts

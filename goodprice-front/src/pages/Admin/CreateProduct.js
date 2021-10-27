import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import NavigationBar from '../../components/Navbar/NavigationBar'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import { CREATE_PRODUCT_RESET } from '../../constants/product-constants'
import { addProduct } from '../../actions/product-actions'
import { LinkContainer } from 'react-router-bootstrap'

const CreateProduct = () => {
  const [productId, setProductId] = useState(0)
  const [productName, setProductName] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productDescription, setproductDescription] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [productDiscount, setProductDiscount] = useState(0)
  const [productStock, setProductStock] = useState(0)
  const [productKeyword, setProductKeywords] = useState('')
  const [productSupplier, setProductSupplier] = useState(0)
  const [productPhoto, setProductPhoto] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, created } = productDetails

  const resetForm = () => {
    setProductId(0)
    setProductKeywords('')
    setProductPhoto('')
    setProductName('')
    setProductStock(0)
    setProductSupplier(0)
    setproductDescription('')
    setProductPrice(0)
    setProductCategory('')
    setProductDiscount(0)
  }

  const handleSubmit = () => {
    if (
      productId === '' ||
      productKeyword === '' ||
      productPhoto === '' ||
      productName === '' ||
      productDescription === '' ||
      productCategory === '' ||
      productPrice === '' ||
      productDiscount === '' ||
      productSupplier === '' ||
      productStock === ''
    ) {
      setErrorMessage('Please enter all the fields to create a product')
    } else if (
      productId <= 0 ||
      productStock < 0 ||
      productSupplier < 0 ||
      productPrice <= 0 ||
      productDiscount < 0
    ) {
      setErrorMessage('Please provide a valid value for the numerical fields')
    } else {
      // alert(typeof productId)
      // alert(typeof parseInt(productId))
      dispatch(
        addProduct(
          parseInt(productId),
          productName,
          productCategory,
          productDescription,
          parseInt(productPrice),
          parseInt(productStock),
          parseInt(productDiscount),
          productKeyword,
          productPhoto,
          parseInt(productSupplier)
        )
      )
      window.scrollTo(0, 0)
      resetForm()
    }
  }

  useEffect(() => {
    dispatch({ type: CREATE_PRODUCT_RESET })
  }, [])

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col>
            <LinkContainer to='/admin' className='my-2'>
              <Button variant='primary'>Back</Button>
            </LinkContainer>
          </Col>
        </Row>
        <Row>
          <h3 className='my-3 page-title'>CREATE PRODUCT</h3>
          {errorMessage ? (
            <Message variant='danger'>{errorMessage}</Message>
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : null}
          {created ? (
            <Message variant='success'>Product created successfully</Message>
          ) : null}
          <Col lg={6}>
            <Form className='my-3'>
              <Form.Group controlId='productName' className='my-3'>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type='text'
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='productCategory' className='my-3'>
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  type='text'
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='productDescription' className='my-3'>
                <Form.Label>Product Description</Form.Label>
                <textarea
                  rows='6'
                  cols='50'
                  value={productDescription}
                  onChange={(e) => setproductDescription(e.target.value)}
                  className='form-control'
                ></textarea>
              </Form.Group>
              <Form.Group controlId='productPrice' className='my-3'>
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type='number'
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='productDiscount' className='my-3'>
                <Form.Label>Product Discount</Form.Label>
                <Form.Control
                  type='number'
                  value={productDiscount}
                  onChange={(e) => setProductDiscount(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6}>
            <Form className='my-3'>
              <Form.Group controlId='productStock' className='my-3'>
                <Form.Label>Product Stock</Form.Label>
                <Form.Control
                  type='number'
                  value={productStock}
                  onChange={(e) => setProductStock(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='productId' className='my-3'>
                <Form.Label>Product ID</Form.Label>
                <Form.Control
                  type='number'
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='productSupplier' className='my-3'>
                <Form.Label>Product Supplier</Form.Label>
                <Form.Control
                  type='number'
                  value={productSupplier}
                  onChange={(e) => setProductSupplier(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='productKeywords' className='my-3'>
                <Form.Label>Product Keywords</Form.Label>
                <Form.Control
                  type='text'
                  value={productKeyword}
                  onChange={(e) => setProductKeywords(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='productPhoto' className='my-3'>
                <Form.Label>Product Photo URL</Form.Label>
                <Form.Control
                  type='text'
                  value={productPhoto}
                  onChange={(e) => setProductPhoto(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Form.Group>
            {loading ? <Loader /> : null}
            <Button variant='primary' onClick={handleSubmit}>
              CReate Product
            </Button>
          </Form.Group>
        </Row>
      </Container>
    </>
  )
}

export default CreateProduct

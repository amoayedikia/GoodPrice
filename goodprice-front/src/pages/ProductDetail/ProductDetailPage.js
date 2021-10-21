import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Table, Badge, Button } from 'react-bootstrap'
import NavigationBar from '../../components/Navbar/NavigationBar'
import { LinkContainer } from 'react-router-bootstrap'

const ProductDetailPage = ({ match, history }) => {
  const dispatch = useDispatch()
  const pid = match.params.pid

  const productDetails = useSelector((state) => state.productDetails)
  const {
    products: { Items },
  } = productDetails

  const [productImage, setProductImage] = useState('')
  const [productName, setProductName] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productStock, setProductStock] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productKeywords, setProductKeywords] = useState('')
  const [productDescription, setproductDescription] = useState('')
  const [productDiscount, setProductDiscount] = useState('')

  useEffect(() => {
    const getProductById = async () => {
      let product

      if (Items.length > 0) {
        product = await Items.filter((i) => i.product_id == pid)[0]
      }

      setProductImage(product.photo_url)
      setProductName(product.product_name)
      setproductDescription(product.product_description)
      setProductCategory(product.product_category)
      setProductStock(product.stock_status)
      setProductDiscount(product.product_discount)
      setProductPrice(product.product_price)
      setProductKeywords(product.keywords)
      console.log(product)
    }

    getProductById()
  }, [])

  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={3}>
            <LinkContainer to='/' className='my-3'>
              <Button variant='primary'>Back</Button>
            </LinkContainer>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <img
              src={`${productImage}`}
              alt='product-image'
              style={{ width: '100%', height: 'auto' }}
              className='img-fluid my-3'
            />
          </Col>
          <Col lg={8}>
            <h3>{productName}</h3>
            <p>
              <Badge>{productCategory}</Badge>
            </p>
            <h4>{productPrice} AU$</h4>
            <p>
              {productStock > 0
                ? `${productStock} items available`
                : productStock}
            </p>
            <p>
              Keywords: <br />
              #goodprice
            </p>
            <p>Discount: {productDiscount}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h3>Product Description</h3>
            <p>{productDescription}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductDetailPage

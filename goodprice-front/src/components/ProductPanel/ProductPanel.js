import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import ProductItem from './components/ProductItem'
//import './ProductItems.scss'
import Loader from '../Loader/Loader'
import {
  addToCompareList,
  filterProducts,
  removeFromCompareList,
} from '../../actions/product-actions'

const ProductItems = ({ name }) => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const {
    products: { Items },
    filteredProducts,
    compareProducts,
    filteredCategories,
  } = productDetails

  const test = () => {
    alert('gg')
  }

  return (
    <Container className='product__container'>
      <Row>
        {name !== '' || filteredCategories.length > 0
          ? filteredProducts.map((i) => (
              <ProductItem
                id={i.product_id}
                photo={i.photo_url}
                name={i.product_name}
                description={i.product_description}
                price={i.product_price}
                supplier={i.product_supplier}
              />
            ))
          : Items.map((i) => (
              <ProductItem
                id={i.product_id}
                photo={i.photo_url}
                name={i.product_name}
                description={i.product_description}
                price={i.product_price}
                supplier={i.product_supplier}
              />
            ))}
      </Row>
    </Container>
  )
}

export default ProductItems

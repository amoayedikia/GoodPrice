import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container, Row, Col, Button } from 'react-bootstrap'
import NavigationBar from '../../components/Navbar/NavigationBar'
import CardFilter from '../../components/FilterSearch/components/CardFilter/CardFilter'
import SearchBar from '../../components/FilterSearch/SearchBar'
import ProductPanel from '../../components/ProductPanel/ProductPanel'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import './SearchPage.scss'
import {
  filterProducts,
  getProductCategories,
  getProductList,
} from '../../actions/product-actions'
import { LinkContainer } from 'react-router-bootstrap'
import { RESET_COMPARE } from '../../constants/product-constants'

const SearchPage = () => {
  const [filterName, setFilterName] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, compareProducts, filteredCategories } = productDetails

  //Loading all the products on component Mount i.e. every page load
  useEffect(() => {
    dispatch(getProductList())
    dispatch(getProductCategories())
  }, [])

  const handleFilter = (e) => {
    setFilterName(e.target.value)
    console.log(filterName)
    dispatch(filterProducts(filterName, filteredCategories))
  }

  const resetNameFilter = () => {
    setFilterName('')
  }

  return (
    <div>
      <NavigationBar />
      <Container className='content'>
        <Row>
          <Col lg={4} md={12}>
            <SearchBar
              search={handleFilter}
              reset={resetNameFilter}
              value={filterName}
              placeholder='Filter by Name'
            />
            <CardFilter name={filterName} />
          </Col>
          <Col lg={8} md={12}>
            {compareProducts.length > 0 ? (
              <Container>
                <Row>
                  <Col lg={5}>
                    <LinkContainer to='/products/compare'>
                      <Button variant='primary' className='mx-2'>
                        Compare
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      onClick={() => dispatch({ type: RESET_COMPARE })}
                    >
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Container>
            ) : null}
            {loading ? <Loader /> : null}
            {error ? <Message variant='danger'>{error}</Message> : null}
            <div className='searchbar-horizontal'>
              <ProductPanel name={filterName} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SearchPage

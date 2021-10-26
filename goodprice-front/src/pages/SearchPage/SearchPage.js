import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container, Row, Col, Button } from 'react-bootstrap'
import NavigationBar from '../../components/Navbar/NavigationBar'
import CardFilter from '../../components/Filters/CardFilter'
import SearchBar from '../../components/Filters/SearchBar'
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
import AccreditationFilter from '../../components/Filters/AccreditationFilter'
import PriceFilter from '../../components/Filters/PriceFilter'
import Sorter from '../../components/Filters/Sorter'

const SearchPage = () => {
  const [filterName, setFilterName] = useState('')
  const [filterCategory, setFilterCategory] = useState([])
  const [filterAccreditation, setFilterAccreditation] = useState('all')
  const [filterPrice, setFilterPrice] = useState('all')
  const [filterSort, setFilterSort] = useState('default')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, compareProducts } = productDetails

  //Loading all the products on component Mount i.e. every page load
  useEffect(() => {
    dispatch(getProductList())
    dispatch(getProductCategories())
  }, [])

  const handleSearchFilter = (e) => {
    setFilterName(e.target.value)
    console.log(filterName)
    dispatch(
      filterProducts(
        e.target.value,
        filterCategory,
        filterAccreditation,
        filterPrice,
        filterSort
      )
    )
  }

  const handleCategoryFilter = (category) => {
    let newCategory

    if (!filterCategory.includes(category)) {
      newCategory = [...filterCategory, category]
    } else {
      newCategory = filterCategory.filter((c) => c != category)
    }
    setFilterCategory(newCategory)
    dispatch(
      filterProducts(
        filterName,
        newCategory,
        filterAccreditation,
        filterPrice,
        filterSort
      )
    )
  }

  const handleAccreditationFilter = (accreditation) => {
    setFilterAccreditation(accreditation)

    dispatch(
      filterProducts(
        filterName,
        filterCategory,
        accreditation,
        filterPrice,
        filterSort
      )
    )
  }

  const handlePriceFilter = (price) => {
    setFilterPrice(price)
    dispatch(
      filterProducts(
        filterName,
        filterCategory,
        filterAccreditation,
        price,
        filterSort
      )
    )
  }

  const handleSortFilter = (sort) => {
    setFilterSort(sort)
    dispatch(
      filterProducts(
        filterName,
        filterCategory,
        filterAccreditation,
        filterPrice,
        sort
      )
    )
  }

  const resetAllFilter = () => {
    setFilterPrice('all')
    setFilterAccreditation('all')
    setFilterCategory([])
    setFilterName('')
    setFilterSort('default')
  }

  return (
    <div>
      <NavigationBar />
      <Container className='content'>
        <Row>
          <Col lg={3} md={12}>
            <SearchBar
              search={handleSearchFilter}
              value={filterName}
              placeholder='Filter by Name'
            />
            <Button variant='primary' onClick={resetAllFilter}>
              Reset All
            </Button>
            <Sorter value={filterSort} filter={handleSortFilter} />
            <PriceFilter value={filterPrice} filter={handlePriceFilter} />
            <CardFilter
              filter={handleCategoryFilter}
              categories={filterCategory}
            />
            <AccreditationFilter
              filter={handleAccreditationFilter}
              value={filterAccreditation}
            />
          </Col>
          <Col lg={9} md={12}>
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
              <ProductPanel
                name={filterName}
                categories={filterCategory}
                accreditation={filterAccreditation}
                price={filterPrice}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SearchPage

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Card } from 'react-bootstrap'
import './CardFilter.scss'
import {
  ADD_FILTER_CATEGORY,
  REMOVE_FILTER_CATEGORY,
} from '../../../../constants/product-constants'
import { filterProducts } from '../../../../actions/product-actions'

const CardFilter = ({ name }) => {
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { productCategories, filteredCategories } = productDetails

  const [filteredCategory, setFilteredCategory] = useState([])

  const categoryFilter = async (category) => {
    if (!filteredCategories.includes(category)) {
      dispatch({
        type: ADD_FILTER_CATEGORY,
        payload: category,
      })
    } else if (filteredCategories.includes(category)) {
      dispatch({
        type: REMOVE_FILTER_CATEGORY,
        payload: category,
      })
    }

    /* if (!filteredCategory.includes(category)) {
      setFilteredCategory([...filteredCategory, category])
    } else {
      let updatedFilteredCategory = filteredCategory

      updatedFilteredCategory = await updatedFilteredCategory.filter(
        (c) => c !== category
      )

      setFilteredCategory(updatedFilteredCategory)
    }*/

    dispatch(filterProducts(name, [...filteredCategories, category]))
  }

  return (
    <div className='filter-vertical'>
      <Card border-color='primary' className='filtercard'>
        <Card.Body>
          <Card.Title>Price</Card.Title>
          <div>
            <input type='radio' id='100d' name='price' value='$100' />
            <label for='100d'>Up to $100</label>
          </div>

          <div>
            <input type='radio' id='300d' name='price' value='$300' />
            <label for='300d'>$100 to $300</label>
          </div>

          <div>
            <input type='radio' id='500d' name='price' value='$500' />
            <label for='500d'>$300 to $500</label>
          </div>

          <div>
            <input type='radio' id='1000d' name='price' value='$1000' />
            <label for='1000d'>$500 to $1000</label>
          </div>

          <div>
            <input type='radio' id='over1000d' name='price' value='$2000' />
            <label for='over1000d'>Over $1000</label>
          </div>

          <div className='rangebar'>
            <input type='text' placeholder='$ Min' className='pricerange' />
            - &nbsp;&nbsp;
            <input type='text' placeholder='$ Max' className='pricerange' />
          </div>
        </Card.Body>
      </Card>

      <Card border-color='primary' className='filtercard'>
        <Card.Body>
          <Card.Title>PRODUCT CATEGORY</Card.Title>
          {productCategories.map((p) => (
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                type='checkbox'
                label={p.product_category}
                value={p.product_category}
                onChange={() => categoryFilter(p.product_category)}
                checked={filteredCategories.includes(p.product_category)}
              />
            </Form.Group>
          ))}
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardFilter

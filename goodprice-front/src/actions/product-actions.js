import { BsDisplay } from 'react-icons/bs'
import axios from '../axios-config'
import {
  ADD_TO_COMPARE,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FILTER_PRODUCTS,
  GET_PRODUCTLIST_FAILURE,
  GET_PRODUCTLIST_REQUEST,
  GET_PRODUCTLIST_SUCCESS,
  GET_PRODUCT_CATEGORY_FAILURE,
  GET_PRODUCT_CATEGORY_REQUEST,
  GET_PRODUCT_CATEGORY_SUCCESS,
  REMOVE_FROM_COMPARE,
} from '../constants/product-constants'

///Action to get all the products from the database
export const getProductList = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCTLIST_REQUEST,
    })

    //Getting the list of products from the database on aws
    const { data } = await axios.get(
      'https://1p4ao2bwag.execute-api.ap-southeast-2.amazonaws.com/products'
    )

    dispatch({
      type: GET_PRODUCTLIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: GET_PRODUCTLIST_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const filterProducts =
  (name, categories, accreditation, price, sort) => async (dispatch) => {
    try {
      dispatch({
        type: FILTER_PRODUCTS,
        payload: { name, categories, accreditation, price, sort },
      })
    } catch (error) {
      console.log(error)
    }
  }

export const addToCompareList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TO_COMPARE,
      payload: id,
    })
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCompareList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_FROM_COMPARE,
      payload: id,
    })
  } catch (error) {
    console.log(error)
  }
}

export const addProduct =
  (
    productId,
    productName,
    productCategory,
    productDescription,
    productPrice,
    productStock,
    productDiscount,
    productKeywords,
    productPhoto,
    productSupplier
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_PRODUCT_REQUEST,
      })

      const config = {
        Headers: {
          'Content-type': 'application/json',
        },
      }

      await axios.post(
        'https://u2kjwp2kaj.execute-api.ap-southeast-2.amazonaws.com/products',
        {
          product_id: productId,
          keywords: productKeywords,
          photo_url: productPhoto,
          product_category: productCategory,
          product_description: productDescription,
          product_discount: productDiscount,
          product_name: productName,
          product_price: productPrice,
          stock_status: productStock,
          supplier_id: productSupplier,
        },
        config
      )

      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: CREATE_PRODUCT_FAILURE,
        payload: 'Invalid data',
      })
    }
  }

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_PRODUCT_REQUEST,
    })

    await axios.delete(
      `https://ksu1uqjev8.execute-api.ap-southeast-2.amazonaws.com/product/${id}`
    )

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
    })
  } catch (error) {
    console.log(error)

    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload: 'Some error occured',
    })
  }
}

export const getProductCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_CATEGORY_REQUEST,
    })

    const { data } = await axios.get(
      'https://1p4ao2bwag.execute-api.ap-southeast-2.amazonaws.com/products/categories'
    )

    dispatch({
      type: GET_PRODUCT_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: GET_PRODUCT_CATEGORY_FAILURE,
    })
  }
}

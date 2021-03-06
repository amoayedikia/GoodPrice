import {
  ADD_FILTERE_CATEGORY,
  ADD_FILTER_CATEGORY,
  ADD_TO_COMPARE,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_RESET,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_SUCCESS,
  FILTER_PRODUCTS,
  GET_PRODUCTLIST_FAILURE,
  GET_PRODUCTLIST_REQUEST,
  GET_PRODUCTLIST_SUCCESS,
  GET_PRODUCT_CATEGORY_FAILURE,
  GET_PRODUCT_CATEGORY_REQUEST,
  GET_PRODUCT_CATEGORY_SUCCESS,
  REMOVE_FILTER_CATEGORY,
  REMOVE_FROM_COMPARE,
  RESET_COMPARE,
} from '../constants/product-constants'

const productDetailReducer = (
  state = {
    products: { Items: {} },
    compareProducts: [],
    filteredProducts: [],
    productCategories: [],
    filteredCategories: [],
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTLIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }

    case GET_PRODUCTLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      }
    }

    case GET_PRODUCTLIST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    }

    case FILTER_PRODUCTS: {
      let name = action.payload.name
      let accreditation = action.payload.accreditation
      let price = action.payload.price
      let sort = action.payload.sort

      //Filtering products by Name
      let filteredProducts =
        name !== '' && name !== null
          ? state.products.Items.filter((i) =>
              i.product_name.toLowerCase().includes(name.toLowerCase())
            )
          : state.products.Items

      filteredProducts =
        action.payload.categories.length > 0
          ? filteredProducts.filter((p) =>
              action.payload.categories.includes(p.product_category)
            )
          : filteredProducts

      filteredProducts =
        accreditation !== 'all'
          ? filteredProducts.filter((p) => p.accreditation === accreditation)
          : filteredProducts

      switch (price) {
        case 'all': {
          break
        }
        case '100': {
          console.log('here')
          filteredProducts = filteredProducts.filter(
            (p) => parseInt(p.product_price) <= 100
          )
          break
        }
        case '300': {
          filteredProducts = filteredProducts.filter(
            (p) =>
              parseInt(p.product_price) > 101 &&
              parseInt(p.product_price) <= 300
          )
          break
        }
        case '500': {
          filteredProducts = filteredProducts.filter(
            (p) =>
              parseInt(p.product_price) > 301 &&
              parseInt(p.product_price) <= 500
          )
          break
        }
        case '1000': {
          filteredProducts = filteredProducts.filter(
            (p) =>
              parseInt(p.product_price) > 501 &&
              parseInt(p.product_price) <= 1000
          )
          break
        }
        case '2000': {
          filteredProducts = filteredProducts.filter(
            (p) => parseInt(p.product_price) > 1000
          )
          break
        }

        default: {
          break
        }
      }

      switch (sort) {
        case 'price_asc': {
          filteredProducts.sort((a, b) =>
            parseInt(a.product_price) > parseInt(b.product_price) ? 1 : -1
          )
          break
        }

        case 'price_desc': {
          filteredProducts.sort((a, b) =>
            parseInt(a.product_price) > parseInt(b.product_price) ? -1 : 1
          )
          break
        }

        case 'name_asc': {
          filteredProducts.sort((a, b) =>
            a.product_name > b.product_name ? 1 : -1
          )
          break
        }

        case 'name_desc': {
          filteredProducts.sort((a, b) =>
            a.product_name > b.product_name ? -1 : 1
          )
          break
        }

        default: {
          break
        }
      }

      return {
        ...state,
        filteredProducts: filteredProducts,
      }
    }

    case ADD_TO_COMPARE: {
      return {
        ...state,
        compareProducts: [...state.compareProducts, action.payload],
      }
    }

    case REMOVE_FROM_COMPARE: {
      let compareList = state.compareProducts

      compareList = compareList.filter((p) => p !== action.payload)

      return {
        ...state,
        compareProducts: compareList,
      }
    }

    case RESET_COMPARE: {
      return {
        ...state,
        compareProducts: [],
      }
    }

    case CREATE_PRODUCT_REQUEST: {
      return {
        ...state,
        error: false,
        loading: true,
      }
    }

    case CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        created: true,
      }
    }

    case CREATE_PRODUCT_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }

    case CREATE_PRODUCT_RESET: {
      return {
        ...state,
        error: false,
        loading: false,
        created: false,
      }
    }

    case DELETE_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        deleted: false,
      }
    }

    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: {
          Items: state.products.Items.filter(
            (i) => i.product_id !== action.payload
          ),
        },
        deleted: true,
      }
    }

    case DELETE_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: true,
        error: action.payload,
        deleted: false,
      }
    }

    case DELETE_PRODUCT_RESET: {
      return {
        ...state,
        loading: false,
        error: false,
        deleted: false,
      }
    }

    case GET_PRODUCT_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }

    case GET_PRODUCT_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        productCategories: action.payload,
      }
    }

    case GET_PRODUCT_CATEGORY_FAILURE: {
      return {
        ...state,
        error: 'Invalid data',
        loading: false,
      }
    }

    case ADD_FILTER_CATEGORY: {
      return {
        ...state,
        filteredCategories: [...state.filteredCategories, action.payload],
      }
    }

    case REMOVE_FILTER_CATEGORY: {
      let updatedFilterCategories = state.filteredCategories

      updatedFilterCategories = updatedFilterCategories.filter(
        (c) => c !== action.payload
      )

      return {
        ...state,
        filteredCategories: updatedFilterCategories,
      }
    }

    default: {
      return state
    }
  }
}

export default productDetailReducer

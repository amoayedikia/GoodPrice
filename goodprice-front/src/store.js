import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import userDetailReducer from './reducers/user-reducer'
import productDetailReducer from './reducers/product-reducer'

//Creating the configuration for persisting the Redux store on refresh
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userDetails', 'productDetails'],
}

//Combine and Persisting all the reducers
const reducers = persistReducer(
  persistConfig,
  combineReducers({
    userDetails: userDetailReducer,
    productDetails: productDetailReducer,
  })
)

//Defining the Initial State of the store
const initialState = {
  userDetails: {},
  productDetails: {
    products: {
      Items: [],
    },
    compareProducts: [],
    filteredProducts: [],
    productCategories: [],
    filteredCategories: [],
  },
}

//This middleware is used for handling the async requests
const middleware = [thunk]

//Function to create the store
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

const persistor = persistStore(store)

export { store, persistor }

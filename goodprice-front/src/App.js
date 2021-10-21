import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'
import CreateProduct from './pages/Admin/CreateProduct'
import ListProducts from './pages/Admin/ListProducts'
import CompareProductsPage from './pages/CompareProducts/CompareProductsPage'
import Login from './pages/Login/Login'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'
import Profile from './pages/Profile/Profile'
import Register from './pages/Register/Register'
// import Login from './pages/Login/Login';
import SearchPage from './pages/SearchPage/SearchPage'

// const PrivateRoute = ({ component: Component, props, ...rest }) => (
//   <>
//     <Route
//       {...rest}
//       render={
//         () => (
//           localStorage.getItem('accessToken')
//             ? <Component {...props} />
//             : <Redirect to="/login" />
//         )
//       }
//     />
//   </>
// );

// const PublicRoute = ({ component: Component, props, ...rest }) => (
//   <Route
//     {...rest}
//     render={
//       () => (
//         localStorage.getItem('accessToken')
//           ? <Redirect to={`/search`} />
//           : <Component {...props} />
//       )
//     }
//   />
// );

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={SearchPage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/products/compare' component={CompareProductsPage} />
      <Route exact path='/products/:pid' component={ProductDetailPage} />

      <Route exact path='/admin' component={ListProducts} />
      <Route exact path='/admin/create-product' component={CreateProduct} />
    </Switch>
  </Router>
)

export default App

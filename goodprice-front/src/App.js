import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
// import Login from './pages/Login/Login';
import SearchPage from './pages/SearchPage/SearchPage';

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
      <Route exact path="/" component={SearchPage} />
      {/* <Route path="/login" component={Login} /> */}
    </Switch>
  </Router>
);

export default App;

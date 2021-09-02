import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/Navbar/NavigationBar';

const Login = () => (
    <div>
        <NavigationBar />
        <div>
            <Link to="/search">Search Page</Link>
        </div>
    </div>
);

export default Login;
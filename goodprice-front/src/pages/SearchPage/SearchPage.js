import React from 'react';
import { 
    Container
} from 'react-bootstrap';
import NavigationBar from '../../components/Navbar/NavigationBar';
import CardFilter from '../../components/FilterSearch/components/CardFilter/CardFilter';
import SearchBar from '../../components/FilterSearch/SearchBar';
import ProductPanel from '../../components/ProductPanel/ProductPanel';
import './SearchPage.scss';

const SearchPage = () => (
    <div>
        <NavigationBar />
        <Container className="content">
            <SearchBar />
            <Container className="searchbar-horizontal">
                <CardFilter />
                <ProductPanel />
            </Container>
        </Container>
    </div>
);

export default SearchPage;
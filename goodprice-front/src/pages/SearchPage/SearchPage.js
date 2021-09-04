import React from 'react';
import { 
    Container, Row, Col
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
            <Row>
                <Col lg={4} md={12}>
                    <SearchBar />
                    <CardFilter />
                </Col>
                <Col lg={8} md={12}>
                    <div className="searchbar-horizontal">

                        <ProductPanel />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default SearchPage;
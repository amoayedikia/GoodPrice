import React from 'react';
import { 
    Container
} from 'react-bootstrap';
import ProductItems from './components/ProductItems/ProductItems';
import './ProductPanel.scss';

const ProductPanel = () => (
    <Container className="product-panel">
        <ProductItems />
    </Container>
);

export default ProductPanel;
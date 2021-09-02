import React from 'react';
import { 
    Container
} from 'react-bootstrap';
import ProductItems from './components/ProductItems/ProductItems';

const ProductPanel = () => (
    <Container>
        <ProductItems />
    </Container>
);

export default ProductPanel;
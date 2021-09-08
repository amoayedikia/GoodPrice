import React from "react";
import { Container } from "react-bootstrap";
import ProductItem from "./components/ProductItem/ProductItem";
import "./ProductItems.scss";

const ProductItems = () => (
  <Container className="product__container">
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
    <ProductItem />
  </Container>
);

export default ProductItems;

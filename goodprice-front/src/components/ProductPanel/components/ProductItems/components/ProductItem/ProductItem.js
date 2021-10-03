import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

const ProductItem = () => (
  <Col lg={4} md={12}>
    <Link to="/products/product" className="link">
      <Card className="product__card m-2" border-color="primary">
        <Card.Img
          variant="top"
          src="assets/images/bicycles.png"
          className="product__image"
        />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>Product Description</Card.Text>
          <hr />
          <div>Price</div>
          <div>Supplier Name</div>
          <Button variant="primary" className="product__button">
            View Product
          </Button>
        </Card.Body>
      </Card>
    </Link>
  </Col>
);

export default ProductItem;

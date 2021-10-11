import React from "react";
import { Card, Image, Carousel } from "react-bootstrap";
import "./ImageSection.scss";

const ImageSection = () => (
  <div>
    <Carousel className="product__carousel">
      <Carousel.Item>
        <img
          className="product__image"
          src="https://goodprice-images.s3.ap-southeast-2.amazonaws.com/bicycles.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="product__image"
          src="https://goodprice-images.s3.ap-southeast-2.amazonaws.com/bicycles.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="product__image"
          src="https://goodprice-images.s3.ap-southeast-2.amazonaws.com/bicycles.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* <Card>
      <Card.Img
        as={Image}
        variant="top"
        src="https://goodprice-images.s3.ap-southeast-2.amazonaws.com/bicycles.png"
        fluid={true}
        className="product__image"
      />
    </Card> */}
  </div>
);

export default ImageSection;

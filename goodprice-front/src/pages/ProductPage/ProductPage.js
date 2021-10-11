import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import NavigationBar from "../../components/Navbar/NavigationBar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

const ProductPage = () => (
  <div>
    <NavigationBar />
    <div>
      <Container>
        <ProductDetails />
      </Container>
      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Description">
            Description
          </Tab>
          <Tab eventKey="profile" title="Details">
            Details
          </Tab>
          <Tab eventKey="contact" title="Reviews">
            Reviews
          </Tab>
        </Tabs>
      </Container>
      <Container></Container>
    </div>
  </div>
);

export default ProductPage;

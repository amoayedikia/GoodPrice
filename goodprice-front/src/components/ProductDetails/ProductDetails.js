import React from "react";
import ImageSection from "./components/ImageSection/ImageSection";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import ContactSection from "./components/ContactSection/ContactSection";
import "./ProductDetails.scss";

const ProductDetails = () => (
  <div className="product__details">
    <ImageSection />
    <DescriptionSection />
    <ContactSection />
  </div>
);

export default ProductDetails;

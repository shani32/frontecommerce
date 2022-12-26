import React from "react";
import { products } from "../../components/products";
import "./product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} />
      <div className="description">
        <div>{product.productName}</div>
        <div>{product.price}</div>
      </div>
      <button className="add-button">Add to cart</button>
    </div>
  );
};

export default Product;

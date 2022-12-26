import React from "react";
import { products } from "../../components/products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="header">
        <h1>Ship Shop</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

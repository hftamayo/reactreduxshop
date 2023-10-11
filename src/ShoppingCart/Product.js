import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <h4>{title}</h4>
      <p>{rating}</p>
      <p>{price}</p>
      <img src={image}></img>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;

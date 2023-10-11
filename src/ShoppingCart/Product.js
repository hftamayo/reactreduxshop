import React from "react";

function Product({ id, title, price, rating, image }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{rating}</p>
      <p>{price}</p>
      <img src={image}></img>
      <button>Ad to Cart</button>
    </div>
  );
}

export default Product;

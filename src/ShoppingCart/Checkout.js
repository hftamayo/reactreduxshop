import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { removeFromCart } from "./Redux/cartAction";

function Checkout() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  return (
    <div className="checkout">
      <div className="checkout_item">
        {cart.cart.map((item) => {
          return (
            <div className="checkout_product" key={item.id}>
              <img src={item.image}></img>
              <div className="product_info">
                <h4>{item.title}</h4>
                <p>{item.rating}</p>
                <p>{item.price}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="subtotal">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;

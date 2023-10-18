import React from "react";
import { useSelector } from "react-redux";
import { getTotal } from "./Redux/cartReducer";

function SubTotal() {
    const cart = useSelector(state => state.cart)
  return (
    <div className="subtotal">
      <div className="subtotal_area">
        <p>
          SubTotal ({cart.cart.length} items: {getTotal(cart)})
        </p>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default SubTotal;

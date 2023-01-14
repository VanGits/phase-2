import React from "react";
import "../styles/Cart.css";
import emptyCart from "../assets/cart.svg";
const Cart = ({ cartList }) => {
  console.log(cartList);

  const cartItem = cartList.map((item) => (
    <div className="cartItem">
      <img src={item.image} alt="" />
      <h2>{item.title}</h2>
    </div>
  ));

  return (
    <div className="Cart">
      {cartItem.length > 0 ? (
        <h1>Your Cart</h1>
      ) : (
        <div className="empty-cart">
          <h1>Your cart is empty!</h1>
          <img src={emptyCart}/>
        </div>
      )}
      {cartItem}
    </div>
  );
};

export default Cart;

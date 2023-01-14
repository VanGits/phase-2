import React from 'react';
import "../styles/Cart.css"
const Cart = ({cartList}) => {
    console.log(cartList)

    const cartItem = cartList.map((item) => (
        <div className="cartItem">
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
        </div>
    ))

    
    return (
        <div className='Cart'>
            <h1>Your Cart</h1>
            {cartItem}
            
        </div>
    );
}

export default Cart;

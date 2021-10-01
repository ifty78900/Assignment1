import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let price = 0;
    cart.forEach(course => {
        price += course.price;
    });
    const priceMaker =()=>{
        if(price === 0){
            return price.toFixed(0);
        }
        else if (price > 0) {
            return price.toFixed(2);
        }
    }
    return (
        <div>
            <h1>This is cart</h1>
            <p>Courses at cart: {cart.length}</p>
            <p>Courses price: {priceMaker()}</p>
        </div>
    );
};

export default Cart;
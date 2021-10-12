import React from 'react';

import './OrderSum.css';

const OrderSum = (props) => {
    const products = props.cartItems;
    // console.log(props.cartItems);
    let total = 0;
    // for (const items of products) {
    //     total = total + items.price;
    // }
    products.forEach(items => total = total + items.price)
    // console.log(total);
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Ordered: {props.cartItems.length}</h5>
            <br />
            <p>Price: ${total}</p>
            <p>Shipping & Handling</p>
            <p>Total before tax:</p>
            <p>Estimated Tax:</p>
            <p>Order Total:	$0</p>
            <br />
            <button className="cart-btn">Review Order</button>
        </div>
    );
};

export default OrderSum;
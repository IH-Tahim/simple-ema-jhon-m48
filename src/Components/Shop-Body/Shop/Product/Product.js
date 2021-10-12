import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const { img, name, price, star, starCount, category, stock, seller } = props.details;


    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-text">
                <h3>{name}</h3>
                <p>By: {seller}</p>
                <p>Category: {category}</p>
                <br />
                <p className="price">Price: ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <br />
                <button className="cart-btn" onClick={() => { props.cartBtn(props.details) }}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>


        </div>
    );
};

export default Product;
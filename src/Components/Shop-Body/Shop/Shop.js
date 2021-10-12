import React, { useEffect, useState } from 'react';
import OrderSum from './Order-Summary/OrderSum';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handelCartBtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }




    return (
        <div className="shop-container">
            <div className="products">
                {
                    products.map(product => <Product
                        key={product.key}
                        details={product}
                        cartBtn={handelCartBtn}
                    ></Product>)
                }
            </div>
            <div className="order-summery">
                <OrderSum
                    cartItems={cart}
                ></OrderSum>
            </div>

        </div>
    );
};

export default Shop;
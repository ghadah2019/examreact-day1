import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/carts/${id}`)
            .then((response) => {
                console.log('Cart API response:', response.data);
        
                if (response.data && response.data.products) {
                    setCartItems(response.data.products);
                } else {
                    console.error(' empty cart');
                }
            })
         
    }, [id]);

    return (
        <div>
            <h2> Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <p>{item.title}</p>
                        <p>Price: ${item.price}</p>
                      
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;

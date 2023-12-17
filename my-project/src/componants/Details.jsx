import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Details() {
    const [productInfo, setProductInfo] = useState({});
    const [cart, setCart] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProductInfo(response.data);
            });
    }, [id]);

    const addToCart = () => {
        const updatedCart = [...cart, productInfo];
        setCart(updatedCart);
    };

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className='flex flex-col'>
                    <p><img className='border border-black p-[3rem]' src={productInfo.image} alt="" /></p>
                    <p><span className='font-bold'>Product Name:</span> {productInfo.title}</p>
                    <p className='text-[red]'><span className='font-bold'>Price:</span> {productInfo.price}$</p>
                    <p><span className='font-bold'>Description:</span> {productInfo.description}</p>
                </div>
            </div>

            <div className='flex flex-col h-[5rem] justify-between'>
                <Link to="/">
                    <button className='bg-[#FFD815] h-[2rem] w-[20rem] rounded-xl'>Back</button>
                </Link>

                <button onClick={addToCart} className='bg-[#FFD815] h-[2rem] w-[20rem] rounded-xl'>Add to Cart</button>
            </div>

          
            <div>
                <h2>Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <p>{item.title}</p>
                            <p>Price: ${item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Details;

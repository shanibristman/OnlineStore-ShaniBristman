import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductContext';


import './Card.css'

export default function Card({ product }) {

    const navigate = useNavigate();
    const { setSelected } = useContext(ProductsContext);


    const goToProductPage = () => {
        setSelected(product)
        navigate("/product");

    }

    return (
        <div className='card' onClick={goToProductPage}>
            <img className="pic" src={product.image.url} />
            <div className="container">

                <div className='title'>{product.title}</div>
            </div>

        </div>
    )
}

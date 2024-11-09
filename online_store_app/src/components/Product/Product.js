import React, { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../../context/ProductContext';

import './Product.css';


export default function Product() {

    const { selected } = useContext(ProductsContext);

    return (
        <div className='product'>
            {console.log("🚀 ~ Product ~ selected:", selected)}
            <img className="picP" src={selected.image.url} />
            <div className="container">
                <div className='title'>{selected.title}</div>
                <div className='desc'>{selected.desc}</div>
                <div className='price'>{selected.price}</div>


            </div>
        </div>
    )
}

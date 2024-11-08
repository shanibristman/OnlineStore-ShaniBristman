import React, { useEffect, useState, useContext } from 'react';
import { ProductsContext } from '../../context/ProductContext';


export default function Product() {

    const { selected } = useContext(ProductsContext);

    return (
        <div>
            {console.log("🚀 ~ Product ~ selected:", selected)}
            <img className="pic" src={selected.image.url} />
            <div className="container">
                <div className='title'>{selected.title}</div>
                <div className='desc'>{selected.desc}</div>
                <div className='price'>{selected.price}</div>


            </div>
        </div>
    )
}

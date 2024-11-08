
import React from 'react'
import { useContext, useEffect } from 'react';


// import { useSelector } from 'react-redux';
import { ProductsContext } from '../../context/ProductContext';
import Card from '../Card/Card'

import './Home.css'
import Search from '../Search/Search';

export default function Home() {

    // const { statusProducts, errorProducts } = useSelector((state) => state.data)
    const { products, loadProducts } = useContext(ProductsContext);




    useEffect(() => {

        loadProducts();
    }, [])

    return (
        <>
            <div>
                online store
            </div>
            <Search />
            <div className='products_display'>

                {console.log("🚀 ~ Home ~ products:", products[0])}

                {products.map(product => {
                    return (

                        <Card key={product.id} className="card" product={product} />
                        // <div key={product.id}> {product.id}</div>

                    )

                })
                }

            </div>
        </>
    )
}

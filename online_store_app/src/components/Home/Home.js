
import React from 'react'
import { useContext, useEffect } from 'react';

import { ProductsContext } from '../../context/ProductContext';
import Card from '../Card/Card'
import Search from '../Search/Search';

import './Home.css'

export default function Home() {

    const { products, loadProducts, status } = useContext(ProductsContext);




    useEffect(() => {

        loadProducts();
    }, [])

    return (
        status ?
            <div className='failed'>Failed to load.. Please try again later</div> :
            <>

                <Search className="searchComponent" />
                <div className='products_display'>

                    {products.map(product => {
                        return (
                            <Card key={product.id} className="card" product={product} />
                        )
                    })
                    }

                </div>
            </>
    )
}

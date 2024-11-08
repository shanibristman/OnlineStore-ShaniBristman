import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Product from './Product/Product';

export default function Navigation() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product' element={<Product />} />

        </Routes>
    )
}

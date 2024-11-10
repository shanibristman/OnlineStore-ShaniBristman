import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductsContextProvider from './context/ProductContext';
import Navigation from './components/Navigation';

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <ProductsContextProvider>
      <Router>
        <Navbar />
        <Navigation />
      </Router>
    </ProductsContextProvider>
  );
}

export default App;

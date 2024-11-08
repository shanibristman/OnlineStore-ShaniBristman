import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import ProductsContextProvider from './context/ProductContext';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    // <Provider store={store}>
    <ProductsContextProvider>
      <Router>
        <Navigation />
      </Router>
    </ProductsContextProvider>
    // </Provider>
  );
}

export default App;

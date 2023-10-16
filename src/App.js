import React from 'react';
import ProductList from './ProductList';
import Modal from 'react-modal';

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <ProductList />
    </div>
  );
}

export default App;

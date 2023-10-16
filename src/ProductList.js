import React, { useState } from 'react';
import Modal from 'react-modal';
import Product from './Product';
import ProductPopup from './ProductPopup';
import './ProductList.css';
import products from './data/products.json';

function ProductList() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openPopup = (productData) => {
        setSelectedProduct(productData);
    };

    return (
        <div className="product-list">

            {products.map((product) =>
                <Product key={product.id} productData={product} openPopup={openPopup} />
            )}

            {selectedProduct && (
                <ProductPopup productData={selectedProduct} closePopup={() => setSelectedProduct(null)} />
            )}
        </div>
    );
}
export default ProductList;
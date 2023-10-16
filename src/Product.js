import React, { useState } from 'react';
import './Product.css';
import ProductPopup from './ProductPopup';
import Modal from 'react-modal';


function Product({ productData, openPopup }) {

  // Add a state variable to track the popup visibility
  const [isVisible, setIsVisible] = useState(false);

  // Update the onClick handler to set the popup visibility state variable to true
  const handleButtonClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="product">
      <div className="product-card">
        <div className="image-container">
          <img className="product-image" src={productData.image} />
        </div>
        <h3 className="product-name">{productData.name}</h3>
        <div className="button-container">
          <button className="product-button" onClick={handleButtonClick}>View Details</button>
        </div>
      </div>
      {isVisible && (
        <ProductPopup productData={productData} closePopup={() => setIsVisible(false)} />
      )}
    </div>
  );
}

export default Product;
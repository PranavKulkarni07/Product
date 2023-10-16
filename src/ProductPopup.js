import React from 'react';
import './ProductPopup.css';
import Modal from 'react-modal';


function ProductPopup({ productData, closePopup }) {
  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-button" onClick={closePopup}>
          <span className="close">&times;</span>
        </button>
        <div className="image-container">
          <img src={productData.image} alt='' />
        </div>
        <div className="container">
          <h2>{productData.name}</h2>
          <p>Price: {productData.price}</p>
          <p>Description: {productData.description}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductPopup;
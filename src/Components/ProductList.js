import React from 'react';
import './ProductList.css'
const ProductList = ({ Product, addToCart }) => {
  return (
    <div className='shopping-item'>
      { 
        Product?.map((productItem, productIndex) => (
          <div style={{width:'33%', height:'20%'}} key={productIndex}>
            <div className='product-item'>
              <img src={productItem.url} width="250" alt={productItem.name} />
              <h4>{productItem.name} | {productItem.category} </h4>
              <p>{productItem.seller}</p>
              <p> Ksh.{productItem.price} /=</p>
              <button onClick={() => addToCart(productItem)}>Add to Cart</button>
            </div>
          </div>
          
        ))
      } 
      
    </div>
  );
};

export default ProductList;

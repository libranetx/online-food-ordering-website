
import '../pages/card.css'
import React from 'react';

export default function FoodCard({ item, onAddToCart }) {
  return (
    <div className='fcard' >
      <img
        src={item.image}
        alt={item.name}
        className='fimage'
  
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p><strong>${item.price.toFixed(2)}</strong></p>
      <button  onClick={() => onAddToCart(item)} className='fbtn'>Add to cart</button>
    </div>
  );
}

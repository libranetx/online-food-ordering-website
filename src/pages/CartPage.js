import React from 'react';

export default function CartPage({ cart }) {
  const handleShowCart = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    let message = "🛒 Items in your cart:\n";
    let total = 0;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
      total += item.price;
    });

    message += `\nTotal: $${total.toFixed(2)}`;
    alert(message);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <button
        onClick={handleShowCart}
        style={{
          padding: '15px 25px',
          backgroundColor: '#f0c000',
          borderRadius: 20,
          fontWeight: 'bold'
        }}
      >
        🛒 Your Cart ({cart.length})
      </button>
    </div>
  );
}

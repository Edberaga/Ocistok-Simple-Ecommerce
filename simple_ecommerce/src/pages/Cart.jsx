import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart } from '../api/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCartItems().then(response => setCart(response.data));
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id).then(() => {
      setCart(cart.filter(item => item.id !== id));
      toast.success('Product removed from cart!');
    }).catch(() => {
      toast.error('Failed to remove product from cart.');
    });
  };

  if (cart.length === 0) return <h1>Your cart is empty</h1>;

  return (
    <div>
      <h1>Cart Page</h1>
      <div className="cart-list">
        {cart.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <Link to='../checkout'><button>Checkout</button></Link>
    </div>
  );
};

export default Cart;
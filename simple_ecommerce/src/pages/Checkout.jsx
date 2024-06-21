import React, {useState, useEffect} from 'react';
import { getCartItems } from '../api/api';
import "../Checkout.scss"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    paymentMethod: 'creditCard'
  });

  useEffect(() => {
    getCartItems().then(response => setCart(response.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful checkout process
    toast.success('Order placed successfully!');
    navigate('/');
  };

  return (
  <section>
    <h1>Checkout Page</h1>
    <section className='checkout-page'> 
      <div className='form-section'>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code:</label>
          <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
    
    <aside className="cart-section">
      <p>Cart: </p>
      <ul className='checkout-list'>
      {cart.map(item => (
        <li key={item.id}>
          <p>{item.name} ${item.price}</p>
        </li>
      ))}
      </ul>
    </aside>
  </section>
</section>
);};

export default Checkout;
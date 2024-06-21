import axios from 'axios';

const API_URL = 'http://localhost:8000'; 
const api = axios.create({
  baseURL: `${API_URL}`,
});

export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const addToCart = (product) => api.post('/cart', product);
export const getCartItems = () => api.get('/cart');
export const removeFromCart = (id) => api.delete(`/cart/${id}`);
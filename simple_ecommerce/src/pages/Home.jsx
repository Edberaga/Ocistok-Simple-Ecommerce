import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
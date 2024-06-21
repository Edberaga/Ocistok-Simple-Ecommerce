import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById, addToCart } from '../api/api';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(response => setProduct(response.data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product).then(() => {
      toast.success(`Product ${product.name} added to cart!`);
    }).catch(() => {
      toast.error('Failed to add product to cart.');
    });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
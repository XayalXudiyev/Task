import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/store/cartSlice';
import Notification from '../../components/AddToCartNotification';
import './productDetail.scss'
 
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Product not found:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ id: product.id, quantity: 1 }));

      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product'>
      {showNotification && <Notification message="Product added to cart" onClose={() => setShowNotification(false)} />}

      <div className='left'>
        <img src="../../public/assets/macbook.png" alt="" />
        <h1>{product.name}</h1>
      </div>

      <div className='right'>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <p>{product.price} $</p>
      </div>
    </div>
  );
}

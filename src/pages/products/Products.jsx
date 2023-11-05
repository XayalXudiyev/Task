
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/store/productsSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './products.scss'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        dispatch(fetchProducts(response.data));
      })
      .catch((error) => {
        console.error('Not found:', error);
      });
  }, [dispatch]);

  return (
    <div className='products'>


        {products.map((product) => (

          <div key={product.id} className='card' >

            <h2>{product.name}</h2>
            <img src="assets/macbook.png" alt="" />
            <Link to={`/products/${product.id}`} className='link'>More details</Link>

          </div>

        ))}


    </div>
  );
};

export default Products;
































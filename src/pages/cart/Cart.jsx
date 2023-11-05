import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, removeFromCart } from '../../redux/store/cartSlice';
import './cart.scss';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(updatedCart);
  }, []);
  const updateCart = (newCart) => {
    const totalQuantity = newCart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = newCart.reduce((total, item) => total + item.price * item.quantity, 0);
    localStorage.setItem('cart', JSON.stringify(newCart));
    localStorage.setItem('totalQuantity', totalQuantity);
    localStorage.setItem('totalPrice', totalPrice);

    setCartItems(newCart); 
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));

    const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart(updatedCart);
  };

  const handleDecrementQuantity = (product) => {
    dispatch(decrementQuantity({ id: product.id }));

    const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart(updatedCart);
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart({ id: product.id }));

    const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCart(updatedCart);
  };

  return (
    <div className='cart'>


      <h1>Sepet</h1>



      <div className='total'>
        <p>Total Product: {localStorage.getItem('totalQuantity') || 0}</p>
        <p>Total Price: {localStorage.getItem('totalPrice') || 0} AZN</p>
      </div>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>

              <img src="/assets/macbook.png" alt="" />
            </div>

            <div className='details'>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price} AZN</p>
            </div>
            <div className='button'>
              <button onClick={() => handleAddToCart(item)}>İncrease</button>
              <button onClick={() => handleDecrementQuantity(item)}>Decrease</button>
              <button onClick={() => handleRemoveFromCart(item)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from '../routes/Routes';
import '../style/_navbar.scss';
import { SlBasket } from 'react-icons/sl';

const Navbar = () => {
  const Routing = useRoutes(appRoutes);

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart" >
              <SlBasket size={23} /> <p>{totalQuantity >  (0)  && <span className="cart-item-count">{totalQuantity}</span>}
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>
      {Routing}
    </div>
  );
};

export default Navbar;

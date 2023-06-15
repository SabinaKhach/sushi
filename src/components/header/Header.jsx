import './header.scss';
import React, { useState } from 'react';
import sushilogo from '../../assets/images/sushi-intro.png';

const Header = () => {

  return (
    <div className="header">
        <section className="top-nav">
            <div className='logo'>
              <img src={sushilogo} alt={sushilogo} width='23%' />
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
        </label>
            <ul className="menu">
            <li>About Us</li>
            <li>Contact Information</li>
            <li>Order Here</li>
            <li>Menu</li>
            <li>Cart</li>
            </ul>
        </section>
    </div>
  );
};
export default Header;

import './header.scss';
import React, { useState } from 'react';
import sushilogo from '../../assets/images/sushi-intro.png';
import OutsideClickHandler from '../OutsideClickHandler';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  console.log(isOpen);

  return (
    <div className="header">
        <section className="top-nav">
            <div className='logo'>
              <img src={sushilogo} alt={sushilogo} width='23%' />
            </div>
            <OutsideClickHandler onOutsideClick={handleOutsideClick}>
              <input id="menu-toggle" type="checkbox" checked={isOpen} onChange={toggleDropdown} />
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
            </OutsideClickHandler>
        </section>
    </div>
  );
};
export default Header;

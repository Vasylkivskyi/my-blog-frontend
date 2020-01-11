import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isShowed, setShowing] = useState('pages');

  const handleOpening = () => {
    setShowing('pages-open');
  };
  const handleClosing = () => {
    setShowing('pages-close');
  };
  return (
    <div className="menu-container">
      <div className="menu-buttons">
        <AiOutlineMenu onClick={handleOpening} />
      </div>
      <div className={isShowed} onClick={handleClosing}>
        <div className="close">
          <AiOutlineClose className="close-button" onClick={handleClosing} />
        </div>
        <ul className="menu">
          <li className="page-link">
            <Link to="/">
              <span className="menu-item">Homepage</span>
            </Link>
          </li>
          <li className="page-link">
            <Link to="/about">
              <span className="menu-item">About</span>
            </Link>
          </li>
          <li className="page-link auth">
            <Link to="/register">
              <span className="menu-item">Sign In</span>
            </Link>
          </li>
          <li className="page-link auth">
            <span className="menu-item">Sign Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

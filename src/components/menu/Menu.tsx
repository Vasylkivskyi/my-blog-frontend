import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './menu.scss';

const Menu = () => {
  const [isShowed, setShowing] = useState(false);

  const handleOpening = () => {
    setShowing(!isShowed);
  };
  console.log(isShowed);
  return (
    <div className="menu-container">
      <div className="menu-buttons" onClick={handleOpening}>
        {!isShowed ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <div className={`pages ${isShowed ? 'pages-open' : 'pages-close'}`}>
        <div className="close">
          <AiOutlineClose className="close-button" onClick={handleOpening} />
        </div>
        <ul className="menu">
          <li className="page-link">1</li>
          <li className="page-link">2</li>
          <li className="page-link">3</li>
          <li className="page-link">4</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

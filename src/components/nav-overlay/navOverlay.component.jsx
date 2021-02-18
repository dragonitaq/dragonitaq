import React from 'react';

import './navOverlay.style.scss';

import cross from '../../assets/cross.png';

const NavOverlay = ({ handleNavBtnClick }) => {
  return (
    <div className='menu-overlay' onClick={handleNavBtnClick}>
      <img src={cross} alt='Close menu button' className='close-btn' onClick={handleNavBtnClick} />
      <div className='nav-list-container'>
        <div className='nav-list'>
          <ul>
            <li>
              <a href='/#about' onClick={handleNavBtnClick}>
                &#9728; Little About Me
              </a>
            </li>
            <li>
              <a href='/#portfolio' onClick={handleNavBtnClick}>
                &#9729; Portfolio
              </a>
            </li>
            <li>
              <a href='/#skills' onClick={handleNavBtnClick}>
                &#9730; Technologies
              </a>
            </li>
            <li>
              <a href='/#contact' onClick={handleNavBtnClick}>
                &#9742; Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavOverlay;

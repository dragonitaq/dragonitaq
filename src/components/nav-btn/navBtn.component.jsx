import React from 'react';

import menu from '../../assets/menu.png';

import './navBtn.style.scss';

const NavBtn = ({ handleNavBtnClick }) => {
  return (
    <div>
      <img className='nav-btn' src={menu} alt='navigation button' onClick={handleNavBtnClick} />
    </div>
  );
};

export default NavBtn;

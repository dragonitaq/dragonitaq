import React from 'react';

// import NavButton from '../../assets/nav-btn.svg';
// import { ReactComponent as NavButton } from '../../assets/nav-btn.svg';
import menu from '../../assets/menu.png';
// import cross from '../../assets/cross.png';

import './navBtn.style.scss';

const NavBtn = ({ handleNavBtnClick }) => {
  return (
    <div>
      <img className='nav-btn' src={menu} alt='navigation button' onClick={handleNavBtnClick} />
      {/* <svg className='nav-btn'>
        <use href='../../assets/nav-btn.svg' />
        <use href={NavButton} />
      </svg> */}
    </div>
  );
};

export default NavBtn;

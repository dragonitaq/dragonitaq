import React from 'react';

// import NavButton from '../../assets/nav-btn.svg';
// import { ReactComponent as NavButton } from '../../assets/nav-btn.svg';
import menu from '../../assets/menu.png';
// import cross from '../../assets/cross.png';

import './navBtn.style.scss';

const NavBtn = () => {
  return (
    <div>
      <img className='nav-btn' src={menu} alt='navigation button' />
      {/* <img className='nav-btn' src={cross} alt='navigation button' /> */}
      {/* <svg className='nav-btn'>
        <use href='../../assets/nav-btn.svg' />
        <use href={NavButton} />
      </svg> */}
    </div>
  );
};

export default NavBtn;

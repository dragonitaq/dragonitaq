import React from 'react';

import noSuchPage from '../../assets/404.png';

import './404.style.scss';

export default () => (
  <div className='no-such-page'>
    <img src={noSuchPage} alt='There is no such page' />
    <p>This page is lost in the wind.</p>
  </div>
);

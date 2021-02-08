import React from 'react';

import './commonLoader.style.scss';

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='loader-overlay'></div>
      </div>
    </div>
  );
};

export default Loader;

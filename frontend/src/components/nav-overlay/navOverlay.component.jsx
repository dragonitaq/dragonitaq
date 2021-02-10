import React from 'react';

import './navOverlay.style.scss';

import cross from '../../assets/cross.png';

class NavOverlay extends React.Component {
  render() {
    return (
      <div className='menu-overlay' onClick={this.props.handleNavBtnClick}>
        <img src={cross} alt='Close menu button' className='close-btn' onClick={this.props.handleNavBtnClick} />
        <div className='nav-list-container'>
          <div className='nav-list'>
            <ul>
              <li>
                <a href='/#about' onClick={this.props.handleNavBtnClick}>
                  Little About Me
                </a>
              </li>
              <li>
                <a href='/#portfolio' onClick={this.props.handleNavBtnClick}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='/#skills' onClick={this.props.handleNavBtnClick}>
                  Technologies
                </a>
              </li>
              <li>
                <a href='/#contact' onClick={this.props.handleNavBtnClick}>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavOverlay;

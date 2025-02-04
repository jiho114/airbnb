import React from 'react';
import '../css/style.scss'
const Header = () => {
  return (
    <header id='header' className='header'>
      <div className="header-nav-bar">
        <div className="header-nav-bar-logo">
          <a href="#">
            <div className="header-nav-logo"></div>
            <h2>airbnb</h2>
          </a>
        </div>
        <ul className="header-nav-bar-sign">
          <li><a href="#">당신의 공간을 에어비앤비하세요</a></li>
          <li><a href="#">가입하기</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
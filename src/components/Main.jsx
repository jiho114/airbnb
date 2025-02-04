import React from 'react';
import Search from './Search';
import Topnotice from './Topnotice';
import Item from './Item';
import Lastitem from './Lastitem'
import Notice from './Notice'
const Main = () => {
  return (
    <main id='main' className='main'>
      <div className="container">
       <Search/> 
      </div>
      <div className="container">
       <Topnotice/> 
      </div>
      <div className="container">
       <Item/> 
      </div>
      <div className="container">
       <Lastitem/> 
      </div>
      <div className="container">
       <Notice/> 
      </div>
      <div className="footer-top-line"></div>
      <div className="container">
       <footer>© 2025 Airbnb, Inc. All rights reserved.</footer> 
      </div>
    </main>
  );
};

export default Main;
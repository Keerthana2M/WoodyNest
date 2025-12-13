import React from 'react';
import door from './assets/Door_c.jpg';

const categories = () => {
  return (
    <div>
      <p>Categories</p>
      <div>
        <div>
             <img src={door} alt="Door"/>
             <p>DOOR</p>
        </div> 
      </div>
    </div>
  )
}

export default categories

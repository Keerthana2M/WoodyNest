import React from 'react';
import MainBanner from '../components/MainBanner';
import categories from '../components/categories';

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <categories/>
      
    </div>
  )
}

export default Home

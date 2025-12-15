import React from 'react';
import MainBanner from '../components/MainBanner';
import Categories from '../components/categories';
import BestSeller  from '../components/BestSeller';
import Bottom_Banner from '../components/Bottom_Banner';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <Bottom_Banner/>
        <NewsLetter/>
    </div>
  )
}

export default Home

import React from 'react';
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.Main} alt="Main Banner" className='w-full h-[550px] hidden md:block'/>
      <img src={assets.mobile} alt="Mobile Banner" className='w-full h-[550px] md:hidden'/>
      <div className='absolute inset-0 flex flex-col items-center ms:items-start justify-end md:justify-center 
      pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-3x1 md:text-4xl lg-text-5xl font-bold 
        text-center md:text-center max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>Feel the Warmth of Real Wood</h1>
      
     <div className='flex items-center mt-6 font-medium'>
        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-7 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
          Shop Now
          <img className='md-hidden transition group-focus:translate-x-1 w-1' src ={assets.warrow} alt='arrow1'/>
        </Link>

         <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer font-bold  '>
         Explore deals
          <img className='transition group-hover:translate-x-1 w-2 ' src ={assets.arrow} alt='arrow2'/>
        </Link>
      </div>
      </div>
    </div> 
  )
}

export default MainBanner;

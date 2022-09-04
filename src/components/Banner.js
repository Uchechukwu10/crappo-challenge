import React from 'react';
import illustration from '../images/Illustration.png';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <section className='banner flex md:px-11 lg:px-32 relative'>
      <div className='flex flex-col lg:flex-row py-5 pl-3'>
        <div className='banner-details flex flex-col justify-center lg:w-1/2'>
          <div className='text-base rounded-3xl bg-yellow-400 w-fit h-fit pr-2 promo'><span className='font-medium text-base rounded-3xl bg-red-500 w-fit px-2 py-1 mr-4'>75% SAVE</span>For the Black Friday weekend</div>
          <h1 className='text-5xl lg:text-6xl font-bold my-5 py-3 px-2'>Fastest & secure platform to invest in crypto</h1>
          <p className='text-base w-10/12 lg:w-8/12 my-4'>Buy and sell cryptocurrencies by trusted 10M wallets with over $30 billion in transactions</p>
          <div className='try-btn w-fit p-3 my-5 rounded-3xl'>Try for FREE <span className='mx-3'><MdKeyboardArrowRight className='inline'/></span></div>
        </div>
        <div className='banner-illustration px-3 lg:w-1/2'><img src={illustration} alt='bitcoin illustration' className='illustration'/></div>
        <div className='absolute ruler2 text-transparent'>hi</div>
      </div>
    </section>
  )
}

export default Banner
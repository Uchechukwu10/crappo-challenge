import React from 'react';
import illustration from '../images/Illustration.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
  return (
    <section className='banner flex md:px-11 lg:px-11 xl:px-32 relative'>
      <div className='flex flex-col lg:flex-row py-5 pl-3'>
      <TrackVisibility partialVisibility className='lg:w-1/2'>
      {({ isVisible }) =>
        <div className={ isVisible ? 'banner-details flex flex-col justify-center animate__animated animate__backInLeft animate__slow' : 'invisible banner-details flex flex-col justify-center'}>
          <div className='text-base rounded-3xl bg-yellow-400 w-fit h-fit pr-2 promo'><span className='font-medium text-base rounded-3xl bg-red-500 w-fit px-2 py-1 mr-4'>75% SAVE</span>For the Black Friday weekend</div>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold my-5 py-3 px-2'>Fastest & secure platform to invest in crypto</h1>
          <p className='text-base w-10/12 lg:w-8/12 my-4'>Buy and sell cryptocurrencies by trusted 10M wallets with over $30 billion in transactions</p>
          <div className='try-btn w-fit py-3 px-3 text-center my-5 rounded-3xl'>Try for FREE <span className='ml-3'><MdKeyboardArrowRight className='inline'/></span></div>
        </div>}
      </TrackVisibility>
      <TrackVisibility partialVisibility className='px-3 lg:w-1/2'>
      {({ isVisible }) =>
      <div className={isVisible ? 'banner-illustration animate__animated animate__backInRight animate__slow' : 'invisible'}><img src={illustration} alt='bitcoin illustration' className='illustration'/></div>}
      </TrackVisibility>
        <div className='absolute ruler2 text-transparent'>hi</div>
      </div>
    </section>
  )
}

export default Banner
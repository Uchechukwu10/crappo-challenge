import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import bitcoin from '../images/bitcoin.png';
import ethereum from '../images/ethereum.png';
import litecoin from '../images/litecoin.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";

const Calculate = () => {
  return (
    <section className='calculate'>
      <div className='calculate-title flex flex-col justify-center items-center pt-5 lg:pt-10 pb-80 lg:pb-48 relative md:px-11 lg:px-11 xl:px-32'>
      <TrackVisibility partialVisibility>
      {({ isVisible }) =>
        <h3 className={ isVisible ? 'text-4xl font-bold py-4 text-center w-10/12 lg:w-8/12 xl:w-6/12 animate__animated animate__tada animate__slow' : 'invisible text-4xl font-bold py-4 text-center w-10/12 lg:w-8/12 xl:w-6/12'}>Check how much you can earn</h3>}
      </TrackVisibility>
        <p className='text-base text-center text-gray-400 lg:px-28 py-4 w-10/12  lg:w-8/12 xl:w-6/12'>Let's check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
        <form className='flex flex-col lg:flex-row items-center hash-form py-5 absolute w-8/12 rounded-t-xl px-3'>
          <input type='text' placeholder='Enter your hash rate' className='w-10/12 lg:w-6/12'/>
          <select type='text' placeholder='Enter your hash rate' className='w-10/12 lg:w-3/12'>
            <option value='TH/s'>TH/s</option>
            <option value='H/s'>H/s</option>
            <option value='KH/s'>KH/s</option>
            <option value='MH/s'>MH/s</option>
            <option value='GH/s'>GH/s</option>
          </select>
          <button type='submit' className='try-btn w-6/12 lg:w-2/12 py-3 px-3 mx-3 my-5 rounded-3xl'>Learn More</button>
        </form>
      </div>
      <div className='trader flex flex flex-col justify-center items-center relative pb-10 pt-64 lg:pt-48 md:px-11 lg:px-11 xl:px-32'>
        <div className='revenue py-4 px-6 absolute w-8/12 rounded-b-xl'>
          <p className='blue-head text-base font-medium'>ESTIMATED 24 HOUR REVENUE:</p>
          <h3 className='text-3xl font-bold py-3'>0.055 130 59 ETH <span className='blue-head'>($1275)</span></h3>
          <p className='text-base text-gray-400 py-2'>Revenue will change based on mining difficulty and Ethereum price.</p>
        </div>
        <h3 className='text-2xl lg:text-4xl font-bold py-8 my-5 w-10/12 text-center'>Trade securely and market the high growth cryptocurrencies.</h3>
        <div className='currencies flex flex-col lg:flex-row justify-center items-center'>
        <TrackVisibility partialVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? 'flex flex-col justify-center items-center bitcoin lg:mx-6 crypto-card px-4 w-8/12 md:w-9/12 lg:w-3/12 animate__animated animate__bounceInUp animate__slow' : 'invisible flex flex-col justify-center items-center bitcoin lg:mx-6 crypto-card px-4 w-8/12 md:w-9/12 lg:w-3/12'}>
            <img src={bitcoin} alt='bitcoin-logo' className='pt-8 pb-5 mt-4'/>
            <span className='flex py-4'><h3 className='text-3xl font-bold mr-2'>Bitcoin</h3><p className='flex items-center text-base text-gray-400'>BTC</p></span>
            <p className='currency-text text-center py-3'>Digital currency in which a record of transactions is maintained.</p>
            <div className='btn w-fit p-3 my-5 rounded-3xl text-white mb-16 start-mining'>Start Mining <span className='mx-3'><MdKeyboardArrowRight className='inline'/></span></div>
            <div className='arrow w-fit p-3 my-5 mb-16'><MdKeyboardArrowRight className='inline text-5xl'/></div>
          </div>}
        </TrackVisibility>
        <TrackVisibility partialVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? 'flex flex-col ethereum mx-6 crypto-card justify-center items-center px-4 w-8/12 md:w-9/12 lg:w-3/12 animate__animated animate__bounceInUp animate__slow' : 'invisible flex flex-col ethereum mx-6 crypto-card justify-center items-center px-4 w-8/12 md:w-9/12 lg:w-3/12'}>
            <img src={ethereum} alt='ethereum-logo' className='pt-8 pb-5 mt-4'/>
            <span className='flex py-4'><h3 className='text-3xl font-bold mr-2'>Ethereum</h3><p className='flex items-center text-base text-gray-400'>ETH</p></span>
            <p className='currency-text text-center py-3'>Blockchain technology to create and run decentralized digital applications.</p>
            <div className='btn w-fit p-3 my-5 rounded-3xl text-white mb-16 start-mining'>Start Mining <span className='mx-3'><MdKeyboardArrowRight className='inline'/></span></div>
            <div className='arrow w-fit p-3 my-5 mb-16'><MdKeyboardArrowRight className='inline text-5xl'/></div>
          </div>}
        </TrackVisibility>
        <TrackVisibility partialVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? 'flex flex-col litecoin mx-6 crypto-card justify-center items-center px-4 w-8/12 md:w-9/12 lg:w-3/12 animate__animated animate__bounceInUp animate__slow' : 'invisible flex flex-col litecoin mx-6 crypto-card justify-center items-center px-4 w-8/12 md:w-9/12 lg:w-3/12'}>
            <img src={litecoin} alt='litecoin-logo' className='pt-8 pb-5 mt-4'/>
            <span className='flex py-4'><h3 className='text-3xl font-bold mr-2'>Litecoin</h3><p className='flex items-center text-base text-gray-400'>ETH</p></span>
            <p className='currency-text text-center py-3'>Cryptocurrency that enables instant payments to anyone in the world.</p>
            <div className='btn w-fit p-3 my-5 rounded-3xl text-white mb-16 start-mining'>Start Mining <span className='mx-3'><MdKeyboardArrowRight className='inline'/></span></div>
            <div className='arrow w-fit p-3 my-5 mb-16'><MdKeyboardArrowRight className='inline'/></div>
          </div>}
        </TrackVisibility>
        </div>
      </div>
    </section>
  )
}

export default Calculate;
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Calculate = () => {
  return (
    <section className='calculate'>
      <div className='calculate-title flex flex-col justify-center items-center pt-10 pb-48 relative'>
        <h3 className='text-4xl font-bold py-4 text-center w-6/12'>Check how much you can earn</h3>
        <p className='text-base text-center text-gray-400 px-28 py-4  w-6/12'>Let's check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
        <form className='flex items-center hash-form py-5 absolute w-8/12 rounded-t-xl'>
          <input type='text' placeholder='Enter your hash rate' className='w-6/12'/>
          <select type='text' placeholder='Enter your hash rate' className='w-3/12'>
            <option value='TH/s'>TH/s</option>
            <option value='H/s'>H/s</option>
            <option value='KH/s'>KH/s</option>
            <option value='MH/s'>MH/s</option>
            <option value='GH/s'>GH/s</option>
          </select>
          <button type='submit' className='try-btn w-2/12 py-3 px-3 mx-3 my-5 rounded-3xl'>Learn More</button>
        </form>
      </div>
      <div className='trader flex flex flex-col justify-center items-center relative pb-10 pt-48'>
        <div className='revenue py-4 px-3 absolute w-8/12 rounded-b-xl'>
          <p className='blue-head text-base font-medium'>ESTIMATED 24 HOUR REVENUE:</p>
          <h3 className='text-3xl font-bold py-3'>0.055 130 59 ETH <span className='blue-head'>($1275)</span></h3>
          <p className='text-base text-gray-400 py-2'>Revenue will change based on mining difficulty and Ethereum price.</p>
        </div>
        <h3>Trade securely and market the high growth cryptocurrencies.</h3>
        <div className='currencies flex'>
          <div className='flex flex-col'>
            <img src='' alt='bitcoin-logo'/>
            <span className='flex'><h3>Ethereum</h3><p>ETH</p></span>
            <p>Blockchain technology to create and run decentralized digital applications.</p>
            <div className='try-btn w-fit p-3 my-5 rounded-3xl'>Try for FREE <span className='mx-3'><MdKeyboardArrowRight className='inline'/></span></div>
          </div>
          <div className='flex flex-col'>
            <img src='' alt='bitcoin-logo'/>
            <span className='flex'><h3>Ethereum</h3><p>ETH</p></span>
            <p>Blockchain technology to create and run decentralized digital applications.</p>
            <div className='try-btn w-fit p-3 my-5 rounded-3xl'>Try for FREE <span className='mx-3'><MdKeyboardArrowRight className='inline'/></span></div>
          </div>
          <div className='flex flex-col'>
            <img src='' alt='bitcoin-logo'/>
            <span className='flex'><h3>Ethereum</h3><p>ETH</p></span>
            <p>Blockchain technology to create and run decentralized digital applications.</p>
            <div className='try-btn w-fit p-3 my-5 rounded-3xl'>Try for FREE <span className='mx-3'><MdKeyboardArrowRight className='inline'/></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Calculate;
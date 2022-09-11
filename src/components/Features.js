import React from 'react';
import bitcoinChart from '../images/chart.png';
import bitcoinTable from '../images/table.png';
import bitcoinStat from '../images/statistic.png';
import circle from '../images/small-circle.png';
import btc from '../images/btc.png';
import eth from '../images/eth.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";
// className={isVisible ? 'chart px-10 my-10 animate__animated animate__tada animate__slow' : 'invisible chart px-10 my-10'}
const Features = () => {
  return (
    <section className='relative'>
      <div className='flex features flex-col px-5 lg:px-16 py-8 lg:py-20'>
        <h2 className='text-3xl lg:text-4xl py-5 lg:py-16 lg:mx-24 xl:mx-84 xl:px-10 font-bold text-center'>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
        <TrackVisibility partialVisibility>
        {({ isVisible }) =>
        <div className='flex invest-smart flex-col lg:flex-row'>
          <div className={isVisible ? 'flex flex-col invest-text my-10 xl:pt-20 px-10 lg:w-5/12 animate__animated animate__fadeInLeftBig animate__slow' : 'invisible flex flex-col invest-text my-10 xl:pt-20 px-10 lg:w-5/12'}>
            <h2 className='text-2xl lg:text-3xl font-bold py-3'>Invest Smart</h2>
            <p className='text-base text-gray-400 py-2 xl:pr-10 lg:w-11/12'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
            <button type='submit' className='try-btn w-6/12 lg:w-40 py-3 px-3 my-5 rounded-3xl'>Learn More</button>
          </div>
          <div className={isVisible ? 'chart px-10 my-10 animate__animated animate__fadeInRightBig animate__slow' : 'invisible chart px-10 my-10'}>
            <img src={bitcoinChart} alt='bitcoin chart'/>
          </div>
        </div>}
        </TrackVisibility>
        <TrackVisibility partialVisibility>
        {({ isVisible }) =>
        <div className={isVisible ? 'flex invest-smart flex-col lg:flex-row-reverse animate__animated animate__fadeInRightBig animate__slow' : 'invisible flex invest-smart flex-col lg:flex-row-reverse'}>
          <div className='flex flex-col invest-text my-10 xl:pt-20 px-10 lg:w-5/12'>
            <h2 className='text-2xl lg:text-3xl font-bold py-3'>Detailed Statistics</h2>
            <p className='text-base text-gray-400 py-2 xl:pr-10 lg:w-11/12'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
            <button type='submit' className='try-btn w-6/12 lg:w-40 py-3 px-3 my-5 rounded-3xl'>Learn More</button>
          </div>
          <div className={isVisible ? 'chart px-10 my-10  relative lg:right-32 animate__animated animate__fadeInLeftBig animate__slow' : 'invisible chart px-10 my-10  relative lg:right-32'}>
            <img src={bitcoinStat} alt='bitcoin statistics'/>
          </div>
        </div>}
        </TrackVisibility>
        <TrackVisibility partialVisibility>
        {({ isVisible }) =>
        <div className='flex invest-smart flex-col lg:flex-row'>
          <div className={isVisible ? 'flex flex-col invest-text my-10 xl:pt-20 px-10 lg:w-7/12 animate__animated animate__fadeInLeftBig animate__slow' : 'invisible flex flex-col invest-text my-10 xl:pt-20 px-10 lg:w-7/12'}>
            <h2 className='text-2xl lg:text-3xl font-bold py-3'>Grow your profit and track your investments</h2>
            <p className='text-base text-gray-400 py-2 xl:pr-10 lg:w-11/12'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
            <button type='submit' className='try-btn w-6/12 lg:w-40 py-3 px-3 my-5 rounded-3xl'>Learn More</button>
          </div>
          <div className={isVisible ? 'chart px-4 lg:px-5 my-10 lg:pt-10 animate__animated animate__fadeInRightBig animate__slow' : 'invisible chart px-4 lg:px-5 my-10 lg:pt-10'}>
            <img src={bitcoinTable} alt='bitcoin table'/>
          </div>
        </div>}
        </TrackVisibility>
      </div>
      <div className='start-mine py-20'>
          <div className='relative mine-btn flex flex-col lg:flex-row justify-center items-center py-10 px-1 mx-8 lg:mx-28'>
            <div className='mine-text lg:w-5/12'>
              <h2 className='text-2xl lg:text-3xl font-bold py-3 text-center lg:text-left'>Start mining now</h2>
              <p className='text-base py-5 lg:py-2 pr-10 lg:w-11/12 text-center lg:text-left'>Join now with CRAPPO to get the latest news and start mining now</p>
            </div>
            <form className='flex flex-col lg:flex-row items-center mine-form lg:w-6/12'>
              <input type='text' placeholder='Enter your email' className='w-10/12 lg:w-9/12 relative lg:bottom-3'/>
              <button type='submit' className='subscribe-btn py-3 px-3 mx-3 my-8 lg:my-5 rounded-3xl font-medium lg:w-3/12'>Subscribe</button>
            </form>
            <div className='absolute eth'><img src={eth} alt='vector'/></div>
            <div className='absolute btc'><img src={btc} alt='vector'/></div>
          </div>
      </div>
      <div className='absolute circle1'><img src={circle} alt='circle'/></div>
      <div className='absolute circle2'><img src={circle} alt='circle'/></div>
    </section>
  )
}

export default Features;
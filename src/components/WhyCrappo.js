import React from "react";
import { IoBarChart } from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import illustration2 from "../images/Illustration2.png";
import uCurve from '../images/u-curve.png';
import dCurve from '../images/D-curve.png';
import 'animate.css';
import TrackVisibility from "react-on-screen";

const WhyCrappo = () => {
  return (
    <section className="why-crappo md:px-11 lg:px-11 xl:px-32 pt-20 pb-7 relative">
      <div className="figures flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <TrackVisibility partialVisibility>
      {({isVisible}) =>
        <div className={isVisible ? "figure flex w-8/12 lg:w-4/12 py-6 lg:py-0 animate__animated animate__pulse animate__slow" : 'invisible figure flex w-8/12 lg:w-4/12 py-6 lg:py-0'}>
          <div className="figure-icon">
            <IoBarChart color="#3671E9" />
          </div>
          <div className="figure-text flex flex-col mx-6">
            <h3 className="text-4xl font-bold">$30B</h3>
            <p className="text-base text-gray-400">Digital Currencies Exchanged</p>
          </div>
        </div>}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
      {({isVisible}) =>
      <div className={isVisible ? "figure flex w-8/12 lg:w-4/12 py-6 lg:py-0 animate__animated animate__pulse animate__slow" : 'invisible figure flex w-8/12 lg:w-4/12 py-6 lg:py-0'}>
          <div className="figure-icon">
            <HiUser color="#3671E9" />
          </div>
          <div className="figure-text flex flex-col mx-6">
            <h3 className="text-4xl font-bold">10M+</h3>
            <p className="text-base text-gray-400">Trusted Wallet Investors</p>
          </div>
        </div>}
      </TrackVisibility>
      <TrackVisibility partialVisibility>
      {({isVisible}) =>
      <div className={isVisible ? "figure flex w-8/12 lg:w-4/12 py-6 lg:py-0 animate__animated animate__pulse animate__slow" : 'invisible figure flex w-8/12 lg:w-4/12 py-6 lg:py-0'}>
          <div className="figure-icon">
            <FaGlobeAmericas color="#3671E9" />
          </div>
          <div className="figure-text flex flex-col mx-6">
            <h3 className="text-4xl font-bold">195</h3>
            <p className="text-base text-gray-400">Countries Supported</p>
          </div>
        </div>}
      </TrackVisibility>
      </div>
      <TrackVisibility partialVisibility>
      {({ isVisible }) =>
      <div className="why-us flex flex-col lg:flex-row justify-center items-center lg:py-32">
        <div className={ isVisible ? "why-img px-6 animate__animated animate__fadeInBottomLeft animate__slow" : "invisible why-img px-6"}><img src={illustration2} alt='crypto'/></div>
        <div className="why-text flex flex-col px-5 lg:px-10 xl:px-20 lg:w-7/12">
          <h3 className={ isVisible ? "text-4xl font-bold py-4 animate__animated animate__fadeInTopRight animate__slow" : "invisible text-4xl font-bold py-4"}>Why you should choose CRAPPO</h3>
          <p className={ isVisible ? "text-base text-gray-400 pr-16 xl:pr-24 py-4 animate__animated animate__fadeInTopRight animate__slow animate__delay-2s" : "invisible text-base text-gray-400 pr-16 xl:pr-24 py-4"}>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
          <div className={ isVisible ? "try-btn w-fit py-3 px-5 my-5 rounded-3xl animate__animated animate__fadeInTopRight animate__slow animate__delay-3s" : "invisible try-btn w-fit py-3 px-5 my-5 rounded-3xl"}>Learn More</div>
        </div>
      </div>}
      </TrackVisibility>
      <div className='absolute u-curve'><img src={uCurve} alt='crypto'/></div>
      <div className='absolute d-curve'><img src={dCurve} alt='crypto'/></div>
      <div className='absolute ruler3 text-transparent'>hi</div>
    </section>
  );
};

export default WhyCrappo;

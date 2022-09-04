import React from "react";
import { IoBarChart } from "react-icons/io5";
import { HiUser } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import illustration2 from "../images/Illustration2.png";
import uCurve from '../images/u-curve.png';
import dCurve from '../images/D-curve.png';

const WhyCrappo = () => {
  return (
    <section className="why-crappo md:px-11 lg:px-32 py-20 relative">
      <div className="figures flex">
        <div className="figure flex w-4/12">
          <div className="figure-icon mx-3">
            <IoBarChart color="#3671E9" />
          </div>
          <div className="figure-text flex flex-col mx-6">
            <h3 className="text-4xl font-bold">$30B</h3>
            <p className="text-base text-gray-400">Digital Currencies Exchanged</p>
          </div>
        </div>
        <div className="figure flex w-4/12">
          <div className="figure-icon">
            <HiUser color="#3671E9" />
          </div>
          <div className="figure-text flex flex-col mx-6">
            <h3 className="text-4xl font-bold">10M+</h3>
            <p className="text-base text-gray-400">Trusted Wallet Investors</p>
          </div>
        </div>
        <div className="figure flex w-4/12">
          <div className="figure-icon">
            <FaGlobeAmericas color="#3671E9" />
          </div>
          <div className="figure-text flex flex-col mx-6">
            <h3 className="text-4xl font-bold">195</h3>
            <p className="text-base text-gray-400">Countries Supported</p>
          </div>
        </div>
      </div>
      <div className="why-us flex justify-center items-center py-32">
        <div className="why-img px-6"><img src={illustration2} alt='crypto'/></div>
        <div className="why-text flex flex-col px-20 w-7/12">
          <h3 className="text-4xl font-bold py-4">Why you should choose CRAPPO</h3>
          <p className="text-base text-gray-400 pr-24 py-4">Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
          <div className='try-btn w-fit py-3 px-5 my-5 rounded-3xl'>Learn More</div>
        </div>
      </div>
      <div className='absolute u-curve'><img src={uCurve} alt='crypto'/></div>
      <div className='absolute d-curve'><img src={dCurve} alt='crypto'/></div>
      <div className='absolute ruler3 text-transparent'>hi</div>
    </section>
  );
};

export default WhyCrappo;

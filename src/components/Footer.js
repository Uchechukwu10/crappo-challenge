import React from 'react';
import logo from "../images/logo.png";
import bitcoinBw from "../images/bitcoin-bw.png";
import visaBw from "../images/visa-bw.png";
import masterCard from "../images/mastercard-bw.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer px-16 pt-10 pb-4 lg:px-11 xl:px-32 lg:pt-20 lg:pb-5'>
      <div className='social-media flex lg:flex-wrap xl:flex-nowrap flex-col lg:flex-row'>
        <div className='footer-logo xl:basis-3/12 mb-5 lg:basis-full lg:mb-10'><img src={logo} alt='logo' width='150px'/></div>
        <div className='flex flex-col xl:basis-3/12 lg:basis-1/2 mb-7'>
          <h4 className='text-2xl font-medium mb-3 lg:mb-6'>Quick Links</h4>
          <p>Home</p>
          <p>Products</p>
          <p>About</p>
          <p>Features</p>
          <p>Contact</p>
        </div>
        <div className='flex flex-col xl:basis-3/12 lg:basis-1/2 mb-7'>
          <h4 className='text-2xl font-medium mb-3 lg:mb-6'>Resources</h4>
          <p>Download Whitepaper</p>
          <p>Smart Token</p>
          <p>Blockchain Explorer</p>
          <p>Crypto API</p>
          <p>Interest</p>
        </div>
        <div className='xl:basis-4/12 lg:basis-full justify-center flex flex-col'>
          <h3 className='font-medium text-3xl py-4 px-4 text-center'>We accept following payment systems</h3>
          <div className='accepted-payment flex flex-row mt-8 justify-center'>
            <div className='visa-bw py-2 flex justify-center bg-white mx-4 w-24'><img src={visaBw} alt='bitcoin' /></div>
            <div className='master-bw py-2 flex justify-center px-3 bg-white mx-4 w-24'><img src={masterCard} alt='bitcoin' /></div>
            <div className='bitcoin-bw py-2 flex justify-center px-3 bg-white mx-4 w-24'><img src={bitcoinBw} alt='bitcoin' /></div>       
          </div>
        </div>
      </div>
      <div className='copyright flex lg:justify-between pt-24 flex-col-reverse lg:flex-row'>
        <p className='text-center mt-4 relative top-8 lg:top-0'> &copy; 2021 CRAPPO. All rights reserved.</p>
        <div className='socials flex items-end'>
          <FaFacebookF className='text-xl mx-5'/>
          <FaInstagram className='text-xl mx-5'/>
          <FaYoutube className='text-xl mx-5'/>
          <FaTwitter className='text-xl mx-5'/>
          <FaLinkedin className='text-xl mx-5'/>
        </div>
      </div>
    </section>
  )
}

export default Footer;
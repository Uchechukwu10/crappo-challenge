import { React, useState } from "react";
import logo from "../images/logo.png";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navigation-bar md:px-11 lg:px-32">
      <nav className="shadow-lg">
        <div className="mx-auto px-4 md:py-4 lg:py-10">
          <div className="flex justify-between">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-10 w-32 mr-2" />
              </a>
            </div>
            <div className="flex space-x-7">
              {/* Primary Navbar items */}
              <div className="hidden lg:flex items-center primary-nav">
                <a href="" className="py-4 px-2">
                  Product
                </a>
                <a href="" className="py-4 px-2">
                  Features
                </a>
                <a href="" className="py-4 px-2">
                  About
                </a>
                <a href="" className="py-4 px-2">
                  Contact
                </a>
              </div>
              {/* Secondary Navbar items */}
              <div className="hidden lg:flex items-center ml-14">
                <a href="" className="py-2 px-2 text-white login-btn">
                  Login
                </a>
                <a
                  href=""
                  className="py-3.5 px-8 w-32.5 h-13 text-white register-btn"
                >
                  Register
                </a>
              </div>
            </div>
            {/* Mobile menu button  */}
            <div
              className="lg:hidden flex items-center"
              onClick={() => setMenu(true)}
            >
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            {/* Mobile Menu */}
            <div
              className={
                menu
                  ? "flex justify-center items-center mobile-menu mobile-popup"
                  : "hidden"
              }
            >
              <div className="close-btn" onClick={() => setMenu(false)}><MdClose /></div>
              <div >
                <div className="primary-link">
                  <a
                    href="index.html"
                    className="block text-xl px-2 py-4 text-white text-center"
                  >
                    Home
                  </a>
                </div>
                <div className="primary-link">
                  <a
                    href="#services"
                    className="block text-xl px-2 py-4 text-white text-center"
                  >
                    Services
                  </a>
                </div>
                <div className="primary-link">
                  <a
                    href="#about"
                    className="block text-xl px-2 py-4 text-white text-center"
                  >
                    About
                  </a>
                </div>
                <div className="primary-link">
                  <a
                    href="#contact"
                    className="block text-xl px-2 py-4 text-white text-center"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="flex py-2.5">
                  <a href="" className="text-xl py-2 px-2 text-white login-btn">
                    Login
                  </a>
                  <a
                    href=""
                    className="text-xl py-1 px-7 w-32 h-9 text-white register-btn"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

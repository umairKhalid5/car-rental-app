import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ sectionInView, activeLink }) => {
  const [showMobNav, setShowMobNav] = useState(false);

  return (
    // <nav
    //   className={`${
    //     sectionInView
    //       ? ''
    //       : 'shrink bg-backgroundLight/90 shadow-md shadow-shadowClr px-4'
    //   } z-30 mx-auto overflow-hidden`}
    // >
    <nav
      className={`${
        sectionInView ? '' : 'shrink px-4'
      } bg-backgroundLight/90 z-30 mx-auto overflow-hidden py-3 shadow-md shadow-shadowClr px-4`}
    >
      <div className="max-w-6xl flex items-center justify-between mx-auto">
        {/* Logo & Nav Links */}
        <div className="left flex items-center gap-14">
          <a href="#" className="logo w-28 sm:w-36 cursor-pointer">
            <img src="/images/logo.png" alt="logo" />
          </a>
          {/* Nav Items */}
          <ul className="hidden lg:flex lg:items-center lg:gap-9 lg:font-medium">
            <li>
              <a
                href="#"
                className={`${
                  activeLink === 'Home' ? 'text-activeEl' : ''
                } hover:text-activeEl duration-150`}
              >
                Home
              </a>
            </li>
            {/* <li>
              <a href="#booking" className="hover:text-activeEl duration-150">
                Book Ride
              </a>
            </li> */}
            <li>
              <a
                href="#about"
                className={`${
                  activeLink === 'About' ? 'text-activeEl' : ''
                } hover:text-activeEl duration-150`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={`${
                  activeLink === 'Testimonials' ? 'text-activeEl' : ''
                } hover:text-activeEl duration-150`}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className={`${
                  activeLink === 'FAQs' ? 'text-activeEl' : ''
                } hover:text-activeEl duration-150`}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#app"
                className={`${
                  activeLink === 'App' ? 'text-activeEl' : ''
                } hover:text-activeEl duration-150`}
              >
                App
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${
                  activeLink === 'Contact' ? 'text-activeEl' : ''
                } hover:text-activeEl duration-150`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden space-x-6 font-medium lg:block">
          <a className="select-none hover:text-fontAccent inline-block active:translate-y-[4px] transition duration-200 cursor-pointer">
            Sign In
          </a>
          <button className="btn py-3 px-6 rounded text-white shadow-lg shadow-shadowClr">
            Register
          </button>
        </div>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setShowMobNav(true)}
        >
          <MenuIcon sx={{ color: '#ff4d30', fontSize: '2.5rem' }} />
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-wrapper ${
            showMobNav && 'show'
          } z-30 fixed inset-0 w-full h-screen bg-zinc-900/50 lg:hidden`}
        >
          <div className="mobile-menu py-5 px-4 bg-white h-screen">
            {/* Logo and Close Button */}
            <div className=" flex items-center justify-between">
              <a
                href="#"
                className="logo w-28 sm:w-32"
                onClick={() => setShowMobNav(false)}
              >
                <img src="/images/logo.png" alt="logo" />
              </a>
              <div
                className="p-[2px] border rounded cursor-pointer"
                onClick={() => setShowMobNav(false)}
              >
                <CloseIcon sx={{ color: '#6F6F6F', fontSize: '2rem' }} />
              </div>
            </div>

            {/* Nav Items */}
            <ul className="flex flex-col gap-9 mt-10 font-medium">
              <li>
                <a
                  href="#"
                  className={`${
                    activeLink === 'Home' ? 'text-activeEl' : ''
                  } hover:text-activeEl duration-150`}
                  onClick={() => setShowMobNav(false)}
                >
                  Home
                </a>
              </li>
              {/* <li>
                <a
                  href="#booking"
                  className="hover:text-activeEl duration-150"
                  onClick={() => setShowMobNav(false)}
                >
                  Book Ride
                </a>
              </li> */}
              <li>
                <a
                  href="#about"
                  className={`${
                    activeLink === 'About' ? 'text-activeEl' : ''
                  } hover:text-activeEl duration-150`}
                  onClick={() => setShowMobNav(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className={`${
                    activeLink === 'Testimonials' ? 'text-activeEl' : ''
                  } hover:text-activeEl duration-150`}
                  onClick={() => setShowMobNav(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className={`${
                    activeLink === 'FAQs' ? 'text-activeEl' : ''
                  } hover:text-activeEl duration-150`}
                  onClick={() => setShowMobNav(false)}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#app"
                  className={`${
                    activeLink === 'App' ? 'text-activeEl' : ''
                  } hover:text-activeEl duration-150`}
                  onClick={() => setShowMobNav(false)}
                >
                  App
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`${
                    activeLink === 'Contact' ? 'text-activeEl' : ''
                  } hover:text-activeEl duration-150`}
                  onClick={() => setShowMobNav(false)}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Buttons */}
            <div className="space-x-6 font-medium mt-10 flex justify-center">
              <button className="flex-1 py-3 px-6 rounded border-2 border-fontAccent text-fontAccent shadow-lg hover:bg-blackBtn hover:text-white hover:border-blackBtn transition duration-200">
                Sign In
              </button>
              <button className="flex-1 btn py-3 px-6 rounded border-2 border-fontAccent text-white shadow-lg shadow-shadowClr">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative z-20 flex items-center justify-between max-w-6xl mx-auto pt-5">
      {/* Logo & Nav Links */}
      <div className="left flex items-center gap-16">
        <div className="logo w-36">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-6 lg:font-medium">
          <a
            href="#"
            className="text-activeEl hover:text-activeEl duration-150"
          >
            Home
          </a>
          <a href="#" className="hover:text-activeEl duration-150">
            About
          </a>
          <a href="#" className="hover:text-activeEl duration-150">
            Vehicle Models
          </a>
          <a href="#" className="hover:text-activeEl duration-150">
            Testimonials
          </a>
          <a href="#" className="hover:text-activeEl duration-150">
            Our Team
          </a>
          <a href="#" className="hover:text-activeEl duration-150">
            Contact
          </a>
        </div>
      </div>

      {/* Buttons */}
      <div className="right space-x-6 font-medium">
        <button>Sign In</button>
        <button className="btn py-3 px-6 rounded text-white shadow-lg shadow-shadowClr">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

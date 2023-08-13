import React, { useEffect } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useInView } from 'react-intersection-observer';

const Footer = ({ setActiveLink }) => {
  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (footerInView) setActiveLink('Contact');
  }, [footerInView]);

  return (
    <section className="px-4" id="contact" ref={footerRef}>
      <div className="max-w-6xl mx-auto mt-20 sm:mt-28">
        {/* Parent Flex */}
        <div className="flex flex-col justify-between space-y-10 lg:flex-row lg:space-x-3 lg:space-y-0">
          {/* <div className="footer-grid"> */}
          {/* Car Rental */}
          <div className="flex flex-col justify-between space-y-6">
            <h4 className="text-2xl">
              <span className="font-semibold">Bold</span> Arrivals
            </h4>
            <p className="text-slate-500 w-full lg:max-w-[270px]">
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon />
                <p>(123) 498-4600</p>
              </div>
              <div className="flex items-center space-x-3">
                <EmailIcon />
                <p>example@boldarrivals.com</p>
              </div>
            </div>
          </div>

          {/* Company & Working Hours */}
          <div className="flex space-x-6 justify-between lg:w-2/5">
            {/* Company */}
            <div className="space-y-6 lg:ml-5">
              <h4 className="text-base md:text-2xl font-semibold">COMPANY</h4>
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-sm sm:text-base">
                  Careers
                </a>
                <a href="#" className="text-sm sm:text-base">
                  Blog
                </a>
                <a href="#" className="text-sm sm:text-base">
                  How We Work
                </a>
                <a href="#" className="text-sm sm:text-base">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Working Hours */}
            <div className="space-y-6">
              <h4 className="text-base md:text-2xl font-semibold">
                WORKING HOURS
              </h4>
              <div className="flex flex-col space-y-3">
                <p className="text-sm sm:text-base text-slate-500 max-w-md">
                  Mon - Fri:{' '}
                  <span className="text-black">09:00AM - 09:00PM</span>
                </p>
                <p className="text-sm sm:text-base text-slate-500 max-w-md">
                  Sat: <span className="text-black">09:00AM - 07:00PM</span>
                </p>
                <p className="text-sm sm:text-base text-slate-500 max-w-md">
                  Sun: <span className="text-black">Closed</span>
                </p>
              </div>
            </div>
          </div>

          {/* Subscription */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-base md:text-2xl font-semibold">
              SUBSCRIPTION
            </h4>
            <p className="text-slate-500 w-full lg:max-w-[270px]">
              Subscribe your Email address for latest news & updates.
            </p>

            {/* Form */}
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                required
                className="w-full sm:max-w-xs bg-slate-100 pl-5 pr-2 py-3 text-sm focus:outline-none border-2 rounded focus:border-fontAccent focus:shadow-md focus:shadow-shadowClr transition duration-200"
                placeholder="Enter Email Address"
              />
              <div className="sm:max-w-xs">
                <button
                  type="submit"
                  className="btn w-full py-3 px-10 text-white font-semibold shadow-lg shadow-shadowClr rounded"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-px bg-slate-100 my-14"></div>

        {/* Copyright & Socials */}
        <div className="flex flex-col items-center justify-between space-y-5 my-5 sm:items-start sm:flex-row sm:space-y-0 sm:space-x-5">
          <div className="flex flex-col space-y-1">
            <p className="text-sm">
              &copy;2020 <span className="font-semibold">Bold Arrivals</span>.
              All Rights Reserved
            </p>
            <a
              href="https://xpeedstudio.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 text-center text-sm cursor-pointer tracking-wide hover:text-fontAccent duration-200 underline underline-offset-2 sm:text-left"
            >
              Design by XpeedStudio
            </a>
          </div>
          <div className="icons flex items-center space-x-5">
            <div
              className="cursor-pointer"
              onClick={() => window.open('https://facebook.com')}
            >
              <FacebookIcon />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => window.open('https://instagram.com')}
            >
              <InstagramIcon />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => window.open('https://twitter.com')}
            >
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

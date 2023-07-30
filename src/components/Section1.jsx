import React from 'react';
import Navbar from './Navbar';
import BookingForm from './BookingForm';

const Section1 = () => {
  const scrollToBooking = () =>
    document.getElementById('booking').scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <section className="relative bg-backgroundLight px-4 overflow-hidden">
      {/* Banner Image */}
      <div className="hidden z-10 absolute right-0 banner-img w-full h-full lg:block"></div>

      {/* Navbar */}
      <Navbar />

      {/* Plan Your Trip */}
      <div className="relative z-20 mt-14 md:mt-28 flex items-center justify-between max-w-6xl mx-auto">
        {/* Left-Text */}
        <div className="w-full md:w-2/5">
          <p className="text-lg font-medium mb-2">Plan your trip now</p>
          <h3 className="text-6xl font-semibold mb-5">
            Save <span className="text-fontAccent">big</span> with our car
            rental
          </h3>
          <p className="text-slate-500">
            To contribute to positive change and achieve our sustainability
            goals with many extraordinary
          </p>

          {/* Buttons */}
          <div className="buttons flex-col my-5 space-y-5 flex w-full sm:flex-row sm:space-x-2 sm:space-y-0">
            <button
              className="btn py-3 px-10 border border-fontAccent text-white font-semibold shadow-lg shadow-shadowClr rounded flex-1 md:flex-none"
              onClick={scrollToBooking}
            >
              Book Ride
            </button>
            <button className="bg-blackBtn py-3 px-10 border border-blackBtn rounded text-white font-semibold flex-1 md:flex-none hover:text-fontAccent hover:border-fontAccent hover:bg-white transition duration-200 ease-in">
              Learn More
            </button>
          </div>
        </div>

        {/* Car-Banner */}
        <div className="hidden absolute top-0 -right-0 translate-x-10 md:block md:w-3/5 lg:w-8/12">
          <img src="/images/banner_car.png" alt="car-banner" />
        </div>
      </div>

      {/* White background */}
      <div className="absolute bg-white bottom-0 right-0 left-0 h-96 sm:h-72 lg:h-52"></div>

      {/* Booking Form */}
      <BookingForm />
    </section>
  );
};

export default Section1;

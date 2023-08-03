import React from 'react';
import { useInView } from 'react-intersection-observer';

const Section3 = () => {
  const { ref: section3Ref, inView: section3InView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className={`slide-down ${section3InView && 'appear'} overflow-hidden`}
      id="about"
      ref={section3Ref}
    >
      <div className="px-4 max-w-6xl mx-auto mt-16">
        {/* About Container*/}
        <div className="flex flex-col space-y-10 md:flex-row md:space-x-5 lg:space-x-32 md:space-y-0">
          {/* Image */}
          <img
            src="/images/about.jpg"
            alt="about"
            className="md:max-w-[350px]"
          />

          {/* About Text */}
          <div className="flex flex-col space-y-3 flex-1">
            <p className="text-xl sm:text-2xl font-medium tracking-tighter">
              About Company
            </p>
            <h3 className="w-full text-3xl sm:text-5xl font-semibold md:max-w-md tracking-tighter">
              You start the engine and your adventure begins
            </h3>
            <div>
              <p className="text-slate-500 md:max-w-md mt-6">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container relative bg-ctaClr mt-14 px-4">
        {/* Backdrop */}
        <div className="absolute inset-0 z-10 bg-ctaClr bg-opacity-50"></div>
        {/* Text Content */}
        <div className="relative z-20 max-w-6xl mx-auto py-16 flex items-center justify-between flex-col space-y-6 lg:flex-row lg:space-x-3 lg:space-y-0">
          <div className="left text-center space-y-5">
            <h3 className="w-full text-white text-3xl sm:text-5xl font-semibold md:max-w-xl tracking-tight">
              Save big with our cheap car rental!
            </h3>
            <p className="text-2xl text-white font-medium tracking-tighter">
              Top Airports. Local Suppliers. 24/7 Support.
            </p>
          </div>
          <div>
            <button className="btn py-4 px-12 text-white shadow-lg shadow-shadowClr rounded text-lg font-semibold hover:-translate-y-[2px] hover:opacity-100 active:translate-y-1">
              Book Ride
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Section2 = () => {
  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    // rootMargin: '70px',
  });

  return (
    <section
      className={`slide-down ${
        section2InView && 'appear'
      } px-4 overflow-hidden`}
      ref={section2Ref}
    >
      <div className="max-w-6xl mx-auto mt-16">
        {/* Plan your trip */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-medium mb-2 tracking-tighter">
            Plan your trip now
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tighter">
            Quick & easy car rental
          </h3>
        </div>
        {/* Flex Container */}
        <div className="mt-10 md:mt-14 flex flex-col items-center justify-between space-y-10 md:flex-row md:space-y-0 md:space-x-16">
          {/* Box 1 */}
          <div className="text-center flex-1 flex flex-col items-center space-y-3 plan-box">
            <img
              src="/images/iconbox-image_01.png"
              alt="icon-1"
              className="w-40"
            />
            <h3 className="text-2xl font-semibold">Select Car</h3>
            <p className="text-slate-400 max-w-xs">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
          {/* Box 2 */}
          <div className="text-center flex-1 flex flex-col items-center space-y-3 plan-box">
            <img
              src="/images/iconbox-image_02.png"
              alt="icon-1"
              className="w-40"
            />
            <h3 className="text-2xl font-semibold">Contact Operator</h3>
            <p className="text-slate-400 max-w-xs">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
          {/* Box 3 */}
          <div className="text-center flex-1 flex flex-col items-center space-y-3 plan-box">
            <img
              src="/images/iconbox-image_01.png"
              alt="icon-1"
              className="w-40"
            />
            <h3 className="text-2xl font-semibold">Let's Drive</h3>
            <p className="text-slate-400 max-w-xs">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
        </div>

        {/* Vehicle Models */}
        <div className="text-center mt-20 flex flex-col space-y-1 items-center">
          <p className="text-xl sm:text-2xl font-medium tracking-tighter">
            Vehicle Models
          </p>
          <h3 className="text-3xl sm:text-4xl font-semibold">
            Our rental fleet
          </h3>
          <p className="text-slate-400 max-w-xs">
            To contribute to positive change and achieve our sustainability
            goals with many extraordinary
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;

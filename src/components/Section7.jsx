import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Section7 = ({ setActiveLink }) => {
  const { ref: section7Ref, inView: section7InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: activeLinkRef, inView: sectionInView } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    if (sectionInView) setActiveLink('App');
  }, [sectionInView]);

  return (
    <div ref={activeLinkRef}>
      <section
        className={`slide-down ${
          section7InView && 'appear'
        } relative section-7 px-4 bg-testimonials-bg mt-20 sm:py-10`}
        id="app"
        ref={section7Ref}
      >
        {/* Image */}
        <div className="app-img">
          <img src="/images/app.png" alt="app-img" />
        </div>
        <div className="absolute inset-0 z-[2] bg-white/30 w-full md:hidden"></div>
        <div className="max-w-6xl mx-auto pt-24 pb-24">
          {/* Left */}
          <div className="max-w-xl space-y-6 relative z-10 flex flex-col items-center sm:items-start">
            <h3 className="text-center sm:text-left text-3xl sm:text-5xl font-semibold tracking-tighter">
              Download our app to get most out of it
            </h3>
            <p className="bg-slate-50/60 rounded py-2 text-center sm:text-left md:bg-transparent text-slate-600 md:text-slate-500 md:max-w-2xl">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="flex space-x-2 w-full">
              <div>
                <img src="images/google-app-download.svg" alt="playstore" />
              </div>
              <div>
                <img src="images/ios-app-btn.svg" alt="iOS" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section7;

import React from 'react';

const Section7 = () => {
  return (
    <>
      <section
        className="relative section-7 px-4 bg-testimonials-bg mt-16"
        id="app"
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
    </>
  );
};

export default Section7;

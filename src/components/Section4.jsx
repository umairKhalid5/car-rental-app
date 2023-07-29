import React from 'react';

const Section4 = () => {
  return (
    <section className="relative px-4 overflow-hidden pb-24">
      <div className="max-w-6xl mx-auto mt-16">
        {/* Jeep Background */}
        <img src="/images/jeep.png" alt="img" className="w-full object-cover" />
        {/* Road Background */}
        <div className="absolute left-0 bottom-0 bg-opacity-30 w-full scale-[3] sm:scale-100">
          <img src="/images/road.png" alt="road-backdrop" />
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 flex flex-col justify-between space-y-10 lg:flex-row lg:space-x-6 lg:space-y-0">
          {/* Left */}
          <div className="left flex flex-col space-y-3">
            <div className="mb-10 space-y-3">
              <p className="text-xl sm:text-2xl font-medium tracking-tighter">
                Why Choose Us
              </p>
              <h3 className="w-full text-3xl sm:text-5xl font-semibold lg:max-w-lg tracking-tighter">
                Best valued deals you will ever find
              </h3>
            </div>
            <p className="text-slate-500 lg:max-w-lg mt-6">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div>
              <button className="btn py-3 px-10 text-white font-semibold shadow-lg shadow-shadowClr rounded">
                Find Deals
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="left flex flex-col space-y-8 justify-between">
            {/* Box-1 */}
            <div className="flex flex-row space-x-3 items-start">
              <img src="/images/drive.png" alt="car" className="w-24" />
              <div className="flex flex-col space-y-2">
                <p className="text-xl sm:text-2xl font-medium tracking-tighter">
                  Cross Country Drive
                </p>
                <p className="text-slate-500 lg:max-w-xs mt-6">
                  Speedily say has suitable disposal add boy. On forth doubt
                  miles of child. Exercise joy man children rejoiced.
                </p>
              </div>
            </div>
            {/* Box-2 */}
            <div className="flex flex-row space-x-3 items-start">
              <img src="/images/price.png" alt="car" className="w-24" />
              <div className="flex flex-col space-y-2">
                <p className="text-xl sm:text-2xl font-medium tracking-tighter">
                  All Inclusive Pricing
                </p>
                <p className="text-slate-500 lg:max-w-xs mt-6">
                  Yet uncommonly his ten who diminution astonished. Demesne new
                  manners savings staying had,
                </p>
              </div>
            </div>
            {/* Box-3 */}
            <div className="flex flex-row space-x-3 items-start">
              <img src="/images/charge.png" alt="car" className="w-24" />
              <div className="flex flex-col space-y-2">
                <p className="text-xl sm:text-2xl font-medium tracking-tighter">
                  No Hidden Charges
                </p>
                <p className="text-slate-500 lg:max-w-xs mt-6">
                  Under folly balls death own point now men. Match way these she
                  avoid see. She whose drift their fat off.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
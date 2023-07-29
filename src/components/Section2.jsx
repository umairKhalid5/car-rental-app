import React from 'react';

const Section2 = () => {
  return (
    <section className="px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Plan your trip */}
        <div className="text-center">
          <p className="text-2xl font-medium mb-2">Plan your trip now</p>
          <h3 className="text-5xl font-semibold">Quick & easy car rental</h3>
        </div>
        {/* Flex Container */}
        <div className="mt-14 flex flex-col items-center justify-between gap-20 md:flex-row">
          {/* Box 1 */}
          <div className="text-center flex-1 flex flex-col space-y-3">
            <h3 className="text-2xl font-semibold">Select Car</h3>
            <p className="text-slate-400">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
          {/* Box 2 */}
          <div className="text-center flex-1 flex flex-col space-y-3">
            <h3 className="text-2xl font-semibold">Contact Operator</h3>
            <p className="text-slate-400">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
          {/* Box 3 */}
          <div className="text-center flex-1 flex flex-col space-y-3">
            <h3 className="text-2xl font-semibold">Let's Drive</h3>
            <p className="text-slate-400">
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

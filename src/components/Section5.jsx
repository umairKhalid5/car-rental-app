import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonialsArr = [
  {
    name: 'Kimberly Garcia',
    city: 'New Jersey',
    msg: `"The rem value is the same as the em value displayed above.
        Both units are scalable"`,
    img: '/images/people/1.jpg',
  },
  {
    name: 'Thiago Silva',
    city: 'Dallas',
    msg: `"The rem value is the same as the em value displayed above.
        Both units are scalable"`,
    img: '/images/people/2.jpg',
  },
  {
    name: 'Mark & Sophie',
    city: 'Boston',
    msg: `"The rem value is the same as the em value displayed above.
           Both units are scalable"`,
    img: '/images/people/3.jpg',
  },
  {
    name: 'Maria Roberts',
    city: 'London',
    msg: `"The rem value is the same as the em value displayed above.
           Both units are scalable"`,
    img: '/images/people/4.jpg',
  },
];

const Section5 = () => {
  const [winSize, setWinSize] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => {
      const size = window.innerWidth;
      setWinSize(size);
    };
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return (
    <section
      className="px-4 overflow-hidden bg-testimonials-bg"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto mt-16">
        {/* Text */}
        <div className="mx-auto flex flex-col items-center space-y-8">
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl text-center font-medium tracking-tighter">
              Reviewed by People
            </p>
            <h3 className="text-center text-3xl sm:text-5xl font-semibold tracking-tighter">
              Clients' Testimonials
            </h3>
          </div>
          <p className="text-center text-slate-500 max-w-2xl">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-10 mb-16 shadow-lg">
          <div className="bg-sliderBg p-2 rounded">
            <Carousel
              infiniteLoop
              autoPlay
              swipeable={false}
              emulateTouch={false}
              useKeyboardArrows
              showStatus={false}
              showThumbs={false}
              centerMode={winSize > 768 ? true : false}
              centerSlidePercentage={winSize > 768 ? 50 : 100}
            >
              {testimonialsArr.map((person, i) => (
                <div
                  key={i}
                  className="relative w-full md:w-11/12 bg-white p-7 py-16 rounded space-y-6"
                >
                  <h3 className="text-left text-xl sm:text-2xl font-semibold tracking-tighter">
                    {person.msg}
                  </h3>
                  <div className="flex flex-row space-x-2 sm:space-x-5 items-center">
                    <div className="w-12 sm:w-16">
                      <img
                        src={person.img}
                        alt="person"
                        className="h-12 md:h-16 object-cover rounded-full"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-medium tracking-tighter">
                        {person.name}
                      </p>
                      <p className="text-slate-600 tracking-tighter -mt-1">
                        {person.city}
                      </p>
                    </div>
                  </div>
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      bottom: '45px',
                      right: winSize > 400 ? '35px' : '20px',
                      color: '#ff4d30',
                      transform: winSize > 350 ? 'scale(4)' : 'scale(3)',
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;

import React, { useEffect } from 'react';

const cars = [
  'Select your car type',
  'Audi A1 S',
  'Mercedes 35',
  'Mercedes',
  'VW PassatCC',
  'BMW 320',
  'Toyota Camry',
  'Lexus CT',
  'Ford GT',
];
const pickUps = [
  'Santa Monica - 2102 Lincoln Blvd',
  'Los Angeles - 5711 W Century Blvd',
  'Las Vegas - 6401 Centennial Center Blvd',
];
const dropOffs = [
  '3669 Oliver Street Wedgwood Texas',
  '330 Hornor Avenue Kiefer Oklahoma',
  '3240 Timbercrest Road SAN PEDRO California',
];
const hours = [
  '12:00 AM',
  '12:30 AM',
  '01:00 AM',
  '01:30 AM',
  '02:00 AM',
  '02:30 AM',
  '03:00 AM',
  '03:30 AM',
  '04:00 AM',
  '04:30 AM',
  '05:00 AM',
  '05:30 AM',
  '06:00 AM',
  '06:30 AM',
  '07:00 AM',
  '07:30 AM',
  '08:00 AM',
  '08:30 AM',
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
  '10:00 PM',
  '10:30 PM',
  '11:00 PM',
  '11:30 PM',
];
const BookingForm = () => {
  return (
    <div
      className="relative z-20 max-w-6xl mx-auto mt-5 mb-10 px-4 py-8 bg-white shadow-md rounded md:px-10 lg:mt-32"
      id="booking"
    >
      <h3 className="text-2xl font-semibold mb-5 tracking-tight">Book a car</h3>

      {/* Select Boxes Container */}
      <div className="flex flex-col items-center justify-between md:flex-row md:flex-wrap gap-5">
        {/* Car Select */}
        <div className="w-full flex flex-col flex-1">
          <label className="font-semibold">Select Your Car Type</label>
          <select className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500">
            {cars.map((car, i) => (
              <option key={i} value={car}>
                {car}
              </option>
            ))}
          </select>
        </div>

        {/* Pick-up Location */}
        <div className="w-full flex flex-col flex-1">
          <label className="font-semibold">Pick-up</label>
          <select className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500">
            {pickUps.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Drop-off Location */}
        <div className="w-full flex flex-col flex-1">
          <label className="font-semibold">Drop-off</label>
          <select className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500">
            {dropOffs.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Times */}
        <div className="w-full flex flex-col sm:flex-row flex-1 gap-5">
          {/* Pick-up Time */}
          <div className="w-full flex flex-col flex-1">
            <label className="font-semibold">Pick-up Time</label>
            <select className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500">
              {hours.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Drop-off Time */}
          <div className="w-full flex flex-col flex-1">
            <label className="font-semibold">Drop-off Time</label>
            <select className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500">
              {hours.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="w-full flex flex-col sm:flex-row flex-1 gap-5">
          {/* Pick-up Date */}
          <div className="w-full flex flex-col sm:flex-row flex-1">
            <div className="w-full flex flex-col flex-1">
              <label className="font-semibold">Pick-up Date</label>
              <input
                className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500 text-sm"
                type="date"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row flex-1">
            <div className="w-full flex flex-col flex-1">
              <label className="font-semibold">Drop-off Date</label>
              <input
                className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500 text-sm"
                type="date"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
        </div>
        {/* Search Button */}
        <button className="self-end btn py-4 font-semibold px-10 text-white shadow-lg shadow-shadowClr rounded w-full sm:flex-1">
          Search
        </button>
      </div>
    </div>
  );
};

export default BookingForm;

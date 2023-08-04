import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import DetailsForm from './DetailsForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CarRentalIcon from '@mui/icons-material/CarRental';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';

const cars = [
  'Audi A1 S',
  'Mercedes 35',
  'VW PassatCC',
  'BMW 320',
  'Toyota Camry',
  'Lexus CT',
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

let options = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const BookingForm = ({ onIsSubmitted }) => {
  const { ref: bookingRef, inView: bookingInView } = useInView({
    triggerOnce: true,
  });

  const dropOffRef = useRef();

  const [showBookingForm, setShowBookingForm] = useState(false);

  const [carType, setCarType] = useState('Audi A1 S');
  const [pickUpLocation, setPickUpLocation] = useState(
    'Santa Monica - 2102 Lincoln Blvd'
  );
  const [dropOffLocation, setDropOffLocation] = useState(
    '3669 Oliver Street Wedgwood Texas'
  );
  const [pickUpTime, setPickUpTime] = useState('12:00 AM');
  const [dropOffTime, setDropOffTime] = useState('12:00 AM');
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);

  const [bookingDataObj, setBookingDataObj] = useState(null);

  const [isTouched, setIsTouched] = useState(false);

  const onCarTypeChange = e => setCarType(e.target.value);
  const onPickUpLocationChange = e => setPickUpLocation(e.target.value);
  const onDropOffLocationChange = e => setDropOffLocation(e.target.value);
  const onPickUpTimeChange = e => setPickUpTime(e.target.value);
  const onDropOffTimeChange = e => setDropOffTime(e.target.value);
  const onPickUpDateChange = e => {
    setPickUpDate(e.target.value);
    dropOffRef.current.focus();
  };
  const onDropOffDateChange = e => setDropOffDate(e.target.value);

  const dateFormatter = date =>
    new Intl.DateTimeFormat('en-US', options).format(date);

  const isValid = !!(carType && pickUpDate && dropOffDate);

  const submitHandler = e => {
    e.preventDefault();
    setIsTouched(true);
    if (!isValid) return;

    setShowBookingForm(true);
    setBookingDataObj({
      carType,
      pickUpLocation,
      dropOffLocation,
      pickUpTime,
      dropOffTime,
      pickUpDate: dateFormatter(new Date(pickUpDate)),
      dropOffDate: dateFormatter(new Date(dropOffDate)),
    });
    setIsTouched(false);
  };

  return (
    <div
      className={`booking-box ${
        bookingInView && 'appear'
      } relative z-20 max-w-6xl mx-auto mt-5 mb-10 px-4 py-8 bg-white shadow-md rounded md:px-10 lg:mt-32`}
      id="booking"
      ref={bookingRef}
    >
      <h3 className="text-2xl font-semibold mb-5 tracking-tight">Book a car</h3>

      {/* Error Box */}
      {!isValid && isTouched && (
        <div className="flex items-center justify-between space-x-3 bg-red-200/70 py-3 px-5 mb-4 mt-6 rounded border border-red-300">
          <p className="font-medium ">All fields required!</p>
          <i
            className="cursor-pointer text-zinc-500 hover:text-zinc-700 duration-200"
            onClick={() => setIsTouched(false)}
          >
            <CloseIcon sx={{ fontSize: '1.3rem' }} />
          </i>
        </div>
      )}

      {/* Select Boxes Container */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-between md:flex-row md:flex-wrap gap-5"
      >
        {/* Car Select */}
        <div className="w-full flex flex-col flex-1 space-y-1">
          <div className="flex items-center space-x-1">
            <CarRentalIcon sx={{ color: '#ff4d30' }} />
            <label className="font-semibold">Select Your Car Type</label>
          </div>
          <select
            className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500"
            onChange={onCarTypeChange}
          >
            {cars.map((car, i) => (
              <option key={i} value={car}>
                {car}
              </option>
            ))}
          </select>
        </div>

        {/* Pick-up Location */}
        <div className="w-full flex flex-col flex-1 space-y-1">
          <div className="flex items-center space-x-1">
            <LocationOnIcon sx={{ color: '#ff4d30' }} />
            <label className="font-semibold">Pick-up</label>
          </div>
          <select
            className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500"
            onChange={onPickUpLocationChange}
          >
            {pickUps.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Drop-off Location */}
        <div className="w-full flex flex-col flex-1 space-y-1">
          <div className="flex items-center space-x-1">
            <LocationOnIcon sx={{ color: '#ff4d30' }} />
            <label className="font-semibold">Drop-off</label>
          </div>
          <select
            className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500"
            onChange={onDropOffLocationChange}
          >
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
          <div className="w-full flex flex-col flex-1 space-y-1">
            <div className="flex items-center space-x-1">
              <AccessTimeIcon sx={{ color: '#ff4d30' }} />
              <label className="font-semibold">Pick-up Time</label>
            </div>
            <select
              className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500"
              onChange={onPickUpTimeChange}
            >
              {hours.map((loc, i) => (
                <option key={i} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Drop-off Time */}
          <div className="w-full flex flex-col flex-1 space-y-1">
            <div className="flex items-center space-x-1">
              <AccessTimeIcon sx={{ color: '#ff4d30' }} />
              <label className="font-semibold">Drop-off Time</label>
            </div>
            <select
              className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500"
              onChange={onDropOffTimeChange}
            >
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
          <div className="w-full flex flex-col sm:flex-row flex-1 ">
            <div className="w-full flex flex-col flex-1 space-y-1">
              <div className="flex items-center space-x-1">
                <CalendarMonthIcon sx={{ color: '#ff4d30' }} />
                <label className="font-semibold">Pick-up Date</label>
              </div>
              <input
                className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500 text-sm"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                onChange={onPickUpDateChange}
              />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row flex-1 ">
            <div className="w-full flex flex-col flex-1 space-y-1">
              <div className="flex items-center space-x-1">
                <CalendarMonthIcon sx={{ color: '#ff4d30' }} />
                <label className="font-semibold">Drop-off Date</label>
              </div>
              <input
                className="pr-10 pl-2 py-4 border border-slate-300 rounded focus:outline-none text-slate-500 text-sm"
                type="date"
                min={pickUpDate ?? new Date().toISOString().split('T')[0]}
                onChange={onDropOffDateChange}
                ref={dropOffRef}
              />
            </div>
          </div>
        </div>
        {/* Search Button */}
        <button className="self-end btn py-4 font-semibold px-10 text-white shadow-lg shadow-shadowClr rounded w-full sm:flex-1">
          Search
        </button>
      </form>
      {/* Details Form */}
      <DetailsForm
        onConfirm={setShowBookingForm}
        showBookingForm={showBookingForm}
        bookingDataObj={bookingDataObj}
        onIsSubmitted={onIsSubmitted}
      />
    </div>
  );
};

export default BookingForm;

import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonalInfoForm from './PersonalInfoForm';

const Backdrop = props => {
  return (
    <div
      className={`backdrop ${
        props.showBookingForm && 'show'
      } fixed inset-0 w-full h-screen bg-zinc-800/60 z-[100]`}
      onClick={() => props.onConfirm(false)}
    />
  );
};

const Modal = props => {
  return (
    <div
      className={`modal ${
        props.showBookingForm && 'show'
      } w-full fixed h-screen text-white flex justify-center items-center max-w-[98%] mx-auto z-[100] lg:w-3/5`}
    >
      <div className="bg-white max-w-6xl max-h-[90%] overflow-y-auto border border-white tracking-tight">
        {/* Complete Reservation & Close Box */}
        <div className="flex space-x-10 item-center justify-between bg-fontAccent py-4 px-3">
          <h3 className="font-semibold text-2xl">Complete Reservation</h3>
          <div
            className="cursor-pointer"
            onClick={() => props.onConfirm(false)}
          >
            <CloseIcon sx={{ color: '#f0f0f0', fontSize: '2rem' }} />
          </div>
        </div>

        {/* Upon Completing */}
        <div className="space-y-5 bg-shadowClr/10 px-5 pt-3 pb-12">
          <div className="flex items-center space-x-2">
            <InfoIcon sx={{ color: '#ff4d30', fontSize: '2rem' }} />
            <p className="max-w-2xl text-fontAccent font-semibold text-lg">
              Upon completing this reservation enquiry, you will receive:
            </p>
          </div>
          <p className="max-w-2xl text-lg text-zinc-500">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        {/* Chosen Data */}
        <div className="px-5 py-3 flex flex-col space-y-5 items-start justify-between sm:flex-row sm:space-x-5 sm:space-y-0 text-black">
          {/* Left */}
          <div className="space-y-4 flex-1">
            <h5 className="text-fontAccent text-lg font-medium">
              Location & Date
            </h5>
            {/* Box 1*/}
            <div className="flex items-start space-x-3">
              <div>
                <CalendarMonthIcon sx={{ color: '#ff4d30' }} />
              </div>
              <div className="flex flex-col space-y-1 items-start">
                <p className="font-medium text-sm">Pick-Up Time</p>
                <p className="text-zinc-500">03/08/2023 12:00 AM</p>
              </div>
            </div>
            {/* Box 2*/}
            <div className="flex items-start space-x-3">
              <div>
                <CalendarMonthIcon sx={{ color: '#ff4d30' }} />
              </div>
              <div className="flex flex-col space-y-1 items-start">
                <p className="font-medium text-sm">Drop-Off Time</p>
                <p className="text-zinc-500">03/08/2023 09:00 AM</p>
              </div>
            </div>
            {/* Box 3*/}
            <div className="flex items-start space-x-3">
              <div>
                <LocationOnIcon sx={{ color: '#ff4d30' }} />
              </div>
              <div className="flex flex-col space-y-1 items-start">
                <p className="font-medium text-sm">Pick-Up Location</p>
                <p className="text-zinc-500">
                  Santa Monica - 2102 Lincoln Blvd
                </p>
              </div>
            </div>
            {/* Box 4*/}
            <div className="flex items-start space-x-3">
              <div>
                <LocationOnIcon sx={{ color: '#ff4d30' }} />
              </div>
              <div className="flex flex-col space-y-1 items-start">
                <p className="font-medium text-sm">Drop-Off Location</p>
                <p className="text-zinc-500">
                  3669 Oliver Street Wedgwood Texas
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4 flex-1">
            <h5 className="text-left text-fontAccent text-lg font-medium">
              CAR: Mercedes 35
            </h5>
            <div className="w-8/12 sm:w-full">
              <img src="/images/cars/v-1.png" alt="" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-200 mb-2" />

        {/* Personal Info - Form*/}
        <PersonalInfoForm />
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const DetailsForm = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          onConfirm={props.onConfirm}
          showBookingForm={props.showBookingForm}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Modal
          onConfirm={props.onConfirm}
          showBookingForm={props.showBookingForm}
        />,
        portalElement
      )}
    </>
  );
};

export default DetailsForm;

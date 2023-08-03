import React from 'react';

const ConfirmationBox = ({ isSubmitted, onIsSubmitted }) => {
  return (
    <div
      className={`bg-transparent fixed inset-0 ${
        isSubmitted
          ? 'opacity-100 pointer-events-auto z-30'
          : 'opacity-0 pointer-events-none -z-20'
      } transition-opacity duration-75 delay-250`}
    >
      <div className="confirm-box bg-white border-8 border-fontAccent/70 rounded-md shadow-2xl shadow-shadowClr p-5 py-14 fixed z-30 space-y-6 w-[98%] text-center sm:max-w-lg">
        <p className="font-medium text-center text-xl text-zinc-700">
          You have successfully reserved your booking!
        </p>
        <button
          className="self-end btn py-6 font-medium text-2xl px-10 text-white shadow-xl shadow-shadowClr rounded w-full sm:flex-1 max-w-sm"
          onClick={() => onIsSubmitted(false)}
        >
          Great!
        </button>
      </div>
    </div>
  );
};

export default ConfirmationBox;

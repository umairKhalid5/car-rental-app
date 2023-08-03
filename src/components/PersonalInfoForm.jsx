import React from 'react';
import { Checkbox } from '@mui/material';
import useForm from '../hooks/use-form';

const PersonalInfoForm = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    reset: resetFirstName,
  } = useForm(value => value.trim() !== '');

  let formIsValid = false;
  if (firstNameIsValid) formIsValid = true;

  const submitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(firstName);

    resetFirstName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="px-5 flex flex-col space-y-4 py-3">
        <h4 className="text-fontAccent text-xl font-medium">
          PERSONAL INFORMATION
        </h4>
        {/* Inputs Container */}
        <div className="text-black flex flex-col space-y-3 items-center justify-between">
          {/* Row-1 */}
          <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
            {/* Input 1 */}
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="f-name">
                First Name <span className="text-fontAccent">*</span>
              </label>
              <input
                id="f-name"
                type="text"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your first name"
                value={firstName}
                onChange={firstNameChangeHandler}
              />
            </div>
            {/* Input 2 */}
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="l-name">
                Last Name <span className="text-fontAccent">*</span>
              </label>
              <input
                type="text"
                id="l-name"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Row-2 */}
          <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
            {/* Input 3 */}
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="phone">
                Phone Number <span className="text-fontAccent">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your phone number"
              />
            </div>
            {/* Input 4 */}
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="age">
                Age <span className="text-fontAccent">*</span>
              </label>
              <input
                id="age"
                type="number"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your age"
                min={18}
                defaultValue={18}
              />
            </div>
          </div>

          {/* Row-3 */}
          <div className="flex flex-col space-y-2 flex-1 w-full">
            <label htmlFor="email">
              Email <span className="text-fontAccent">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
              placeholder="Enter your email"
            />
          </div>
          {/* Row-4 */}
          <div className="flex flex-col space-y-2 flex-1 w-full">
            <label htmlFor="address">
              Address <span className="text-fontAccent">*</span>
            </label>
            <input
              id="address"
              type="text"
              className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
              placeholder="Enter your address"
            />
          </div>

          {/* Last Row */}
          <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
            {/* Input 1 */}
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="city">
                City <span className="text-fontAccent">*</span>
              </label>
              <input
                id="city"
                type="text"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your city"
              />
            </div>
            {/* Input 2 */}
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="z-code">
                Zip Code <span className="text-fontAccent">*</span>
              </label>
              <input
                type="text"
                id="z-code"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your zip code"
              />
            </div>
          </div>

          {/* News Letter Checkbox */}
          <div className="flex space-x-2 items-center w-full py-4 group">
            <Checkbox
              size="small"
              sx={{
                margin: 0,
                padding: 0,
                color: '#ff4d30',
                '&.Mui-checked': {
                  color: '#ff4d30',
                },
              }}
            />
            <p className="text-lg text-zinc-600">
              Please send me latest news and updates
            </p>
          </div>
        </div>
      </div>

      {/* Reserve Now Button */}
      <div className="bg-zinc-200 px-4 py-6 w-full flex mt-2 justify-end">
        <button
          disabled={!formIsValid}
          className="btn py-4 font-semibold px-10 text-white shadow-lg shadow-shadowClr rounded w-full sm:w-auto disabled:opacity-50 disabled:pointer-events-none"
        >
          Confirm Reservation
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;

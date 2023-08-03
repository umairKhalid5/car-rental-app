import React from 'react';
import { Checkbox } from '@mui/material';
import useForm from '../hooks/use-form';

const emailValidStr =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const PersonalInfoForm = ({ onConfirm, onIsSubmitted }) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  const {
    value: phoneNumber,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    inputChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useForm(
    value => value.trim() !== '' && value.length > 4 && Number.isInteger(+value)
  );

  const {
    value: age,
    isValid: ageIsValid,
    hasError: ageHasError,
    inputChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useForm(
    value => value.trim() !== '' && value > 17 && Number.isInteger(+value)
  );

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useForm(value => value.match(emailValidStr));

  const {
    value: address,
    isValid: addressIsValid,
    hasError: addressHasError,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useForm(value => value.trim() !== '' && value.length > 3);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  const {
    value: zipCode,
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError,
    inputChangeHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCode,
  } = useForm(value => value.trim() !== '' && value.length > 1);

  let formIsValid = false;
  if (
    firstNameIsValid &&
    lastNameIsValid &&
    phoneNumberIsValid &&
    ageIsValid &&
    emailIsValid &&
    addressIsValid &&
    cityIsValid &&
    zipCodeIsValid
  )
    formIsValid = true;

  const submitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(
      firstName,
      lastName,
      phoneNumber,
      age,
      email,
      address,
      city,
      zipCode
    );

    resetFirstName();
    resetLastName();
    resetPhoneNumber();
    resetAge();
    resetEmail();
    resetAddress();
    resetCity();
    resetZipCode();
    onConfirm(false);
    onIsSubmitted(true);
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
            <div className="flex flex-col space-y-1 flex-1">
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
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className="text-red-500 text-sm">
                  First name must be at least 2 characters!
                </p>
              )}
            </div>
            {/* Input 2 */}
            <div className="flex flex-col space-y-1 flex-1">
              <label htmlFor="l-name">
                Last Name <span className="text-fontAccent">*</span>
              </label>
              <input
                type="text"
                id="l-name"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your last name"
                value={lastName}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className="text-red-500 text-sm">
                  Last name must be at least 2 characters!
                </p>
              )}
            </div>
          </div>

          {/* Row-2 */}
          <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
            {/* Input 3 */}
            <div className="flex flex-col space-y-1 flex-1">
              <label htmlFor="phone">
                Phone Number <span className="text-fontAccent">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={phoneNumberChangeHandler}
                onBlur={phoneNumberBlurHandler}
              />
              {phoneNumberHasError && (
                <p className="text-red-500 text-sm">
                  Phone number must be a string of at least 5 numbers!
                </p>
              )}
            </div>
            {/* Input 4 */}
            <div className="flex flex-col space-y-1 flex-1">
              <label htmlFor="age">
                Age <span className="text-fontAccent">*</span>
              </label>
              <input
                id="age"
                type="number"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your age"
                min={18}
                value={age}
                onChange={ageChangeHandler}
                onBlur={ageBlurHandler}
              />
              {ageHasError && (
                <p className="text-red-500 text-sm">
                  Age must be 18 or greater!
                </p>
              )}
            </div>
          </div>

          {/* Row-3 */}
          <div className="flex flex-col space-y-1 flex-1 w-full">
            <label htmlFor="email">
              Email <span className="text-fontAccent">*</span>
            </label>
            <input
              id="email"
              type="email"
              className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
              placeholder="Enter your email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="text-red-500 text-sm">
                Please enter a valid email address
              </p>
            )}
          </div>
          {/* Row-4 */}
          <div className="flex flex-col space-y-1 flex-1 w-full">
            <label htmlFor="address">
              Address <span className="text-fontAccent">*</span>
            </label>
            <input
              id="address"
              type="text"
              className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
              placeholder="Enter your address"
              value={address}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            {addressHasError && (
              <p className="text-red-500 text-sm">
                Please enter a valid address
              </p>
            )}
          </div>

          {/* Last Row */}
          <div className="flex flex-col space-y-3 justify-between w-full sm:space-x-3 sm:flex-row sm:space-y-0">
            {/* Input 1 */}
            <div className="flex flex-col space-y-1 flex-1">
              <label htmlFor="city">
                City <span className="text-fontAccent">*</span>
              </label>
              <input
                id="city"
                type="text"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your city"
                value={city}
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
              />
              {cityHasError && (
                <p className="text-red-500 text-sm">
                  Please enter your city name
                </p>
              )}
            </div>
            {/* Input 2 */}
            <div className="flex flex-col space-y-1 flex-1">
              <label htmlFor="z-code">
                Zip Code <span className="text-fontAccent">*</span>
              </label>
              <input
                type="text"
                id="z-code"
                className="bg-zinc-200 p-3 text-sm rounded outline-none border border-transparent focus:border-fontAccent duration-200"
                placeholder="Enter your zip code"
                value={zipCode}
                onChange={zipCodeChangeHandler}
                onBlur={zipCodeBlurHandler}
              />
              {zipCodeHasError && (
                <p className="text-red-500 text-sm">
                  Please enter your zip code
                </p>
              )}
            </div>
          </div>

          {/* News Letter Checkbox */}
          <div className="flex space-x-2 items-center w-full py-3 group">
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
          className="bg-fontAccent py-4 font-semibold px-10 text-white shadow-lg shadow-shadowClr rounded w-full sm:w-auto disabled:opacity-70 disabled:shadow-none disabled:cursor-not-allowed disabled:active:translate-y-0 disabled:bg-zinc-400 duration-200"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;

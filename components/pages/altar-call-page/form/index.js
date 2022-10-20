import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col gap-2 w-[750px] max1040:w-[90%] mb-[100px] p-[70px] bmd:p-[30px] mx-[auto] items-center justify-center">
      <h1 className="capitalize text-4xl max400:text-3xl text-center font-semibold mb-5">
        Decision Form
      </h1>
      <div className="w-[90%] bmd:w-[100%] flex flex-col mb-5">
        <label htmlFor="firstName" className="mb-2">
          First Name <span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
          id="firstName"
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex flex-col mb-5">
        <label htmlFor="lastName" className="mb-2">
          Last Name <span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
          id="lastName"
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex flex-col mb-5">
        <label htmlFor="email" className="mb-2">
          Email <span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
          id="email"
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex flex-col mb-5">
        <label htmlFor="contactNumber" className="mb-2">
          Contact Number <span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
          id="contactNumber"
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex flex-col mb-5">
        <p>
          Gender <span className="text-[red]">*</span>
        </p>
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
              id="male"
              value="male"
              name="gender"
              checked
            />
            <label htmlFor="male" className="mr-2">
              Male
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
              id="female"
              value="female"
              name="gender"
            />
            <label htmlFor="female" className="mr-2">
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="w-[90%] bmd:w-[100%] flex flex-col mb-5">
        <label htmlFor="address" className="mb-2">
          Address <span className="text-[red]">*</span>
        </label>
        <textarea
          type="text"
          className="w-[100%] h-[100px] outline-0 border-2 border-gray-300 rounded-[4px] p-3"
          id="address"
        ></textarea>
      </div>

      <div className="w-[90%] bmd:w-[100%] flex flex-col mb-10">
        <label htmlFor="prayerRequest" className="mb-2">
          Prayer Request <span className="text-[red]">*</span>
        </label>
        <textarea
          type="text"
          className="w-[100%] h-[100px] outline-0 border-2 border-gray-300 rounded-[4px] p-3"
          id="prayerRequest"
        ></textarea>
      </div>

      <button className={`buttonPrimary text-sm w-[200px]`}>Submit</button>
    </div>
  );
};

export default Form;

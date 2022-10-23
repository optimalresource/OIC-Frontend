import InputAdornment from "components/utils/form-elements/input-adornment";
import SelectAdornment from "components/utils/form-elements/select-adornment";
import React from "react";

const BioData = () => {
  return (
    <div className="grid grid-cols-1 max640:grid-cols-1 max1140:grid-cols-2 w-[90%] min1141:w-[80%] gap-5">
      <div className="w-[100%] flex items-center justify-center">
        <InputAdornment
          isError={false}
          error="Please enter name"
          className="mt-[50px]"
          label="First Name"
          important={true}
        />
      </div>
      <div className="w-[100%] flex items-center justify-center">
        <InputAdornment
          className="max1140min641:mt-[50px]"
          label="Last Name"
          important={true}
        />
      </div>
      <div className="w-[100%] flex items-center justify-center">
        <InputAdornment label="Email" important={true} />
      </div>

      <div className="w-[100%] flex flex-col items-start justify-center">
        <p>
          Select Gender <span className="text-[red]">*</span>
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

      <div className="w-[100%] flex flex-col items-start justify-center">
        <p>
          Are you a member of The Oasis? <span className="text-[red]">*</span>
        </p>
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
              id="memberYes"
              value="yes"
              name="member"
              checked
            />
            <label htmlFor="memberYes" className="mr-2">
              Yes
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
              id="memberNo"
              value="no"
              name="member"
            />
            <label htmlFor="memberNo" className="mr-2">
              No
            </label>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex items-center justify-center">
        <SelectAdornment
          label="What year did you join Oasis?"
          important={true}
        />
      </div>

      <div className="w-[100%] flex flex-col items-start justify-center">
        <p>
          Do you currently serve in the Oasis?{" "}
          <span className="text-[red]">*</span>
        </p>
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
              id="serveYes"
              value="yes"
              name="serve"
              checked
            />
            <label htmlFor="serveYes" className="mr-2">
              Yes
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              className="w-[100%] h-[50px] outline-0 border-2 border-gray-300 rounded-[4px] px-3"
              id="serveNo"
              value="no"
              name="serve"
            />
            <label htmlFor="serveNo" className="mr-2">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;

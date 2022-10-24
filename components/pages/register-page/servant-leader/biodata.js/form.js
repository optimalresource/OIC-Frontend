import InputAdornment from "components/utils/form-elements/input-adornment";
import RadioGroup from "components/utils/form-elements/radio-group";
import SelectAdornment from "components/utils/form-elements/select-adornment";
import React, { useState, useEffect } from "react";
import { oasisYears } from "data/oasis-years";
import { oasisDepartments } from "data/oasis-departments";

const BioDataForm = ({
  setFirstName,
  setLastName,
  setEmail,
  setGender,
  setMember,
  setServe,
  validateBioData,
  setYearJoined,
  setDepartment,
  biodataformErrors = [],
}) => {
  const [isMember, setIsMember] = useState("");
  const [isServing, setIsServing] = useState("");
  const [errors, setErrors] = useState(biodataformErrors);
  const memberCheck = (value) => {
    setIsMember(value);
    setMember(value);
  };
  const servingCheck = (value) => {
    setIsServing(value);
    setServe(value);
  };
  useEffect(() => {
    setErrors(biodataformErrors);
  }, [biodataformErrors]);
  return (
    <>
      <div className="grid grid-cols-1 max640:grid-cols-1 max1140:grid-cols-2 w-[90%] min1141:w-[80%] gap-5">
        <div className="w-[100%] flex items-center justify-center">
          <InputAdornment
            isError={errors.includes("firstName") ? true : false}
            error="Please enter your first name"
            className="mt-[50px]"
            label="First Name"
            important={true}
            setValue={setFirstName}
          />
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <InputAdornment
            className="max1140min641:mt-[50px]"
            label="Last Name"
            important={true}
            isError={errors.includes("lastName") ? true : false}
            error="Please enter your last name"
            setValue={setLastName}
          />
        </div>
      </div>

      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
        <InputAdornment
          label="Email"
          important={true}
          isError={errors.includes("email") ? true : false}
          error="Please enter your email"
          setValue={setEmail}
        />
      </div>

      <div className="grid grid-cols-1 max640:grid-cols-1 max1140:grid-cols-2 w-[90%] min1141:w-[80%] gap-5">
        <RadioGroup
          items={["Male", "Female"]}
          setValue={setGender}
          label="Select Gender"
          isError={errors.includes("gender") ? true : false}
          error="Please select your gender"
        />
        <RadioGroup
          items={["Yes", "No"]}
          setValue={memberCheck}
          label="Are you a member of The Oasis?"
          isError={errors.includes("isMember") ? true : false}
          error="You didn't indicate if you are an Oasis member"
        />

        {isMember === "Yes" && (
          <>
            <div className="w-[100%] flex items-center justify-center">
              <SelectAdornment
                label="What year did you join Oasis?"
                important={true}
                items={oasisYears}
                setValue={setYearJoined}
                isError={errors.includes("yearJoined") ? true : false}
                error="You didn't indicate what year you joined Oasis"
              />
            </div>

            <RadioGroup
              items={["Yes", "No"]}
              setValue={servingCheck}
              label="Do you currently serve in the Oasis?"
              isError={errors.includes("isServing") ? true : false}
              error="You didn't indicate if you serve in the Oasis"
            />
          </>
        )}
      </div>
      {isServing === "Yes" && (
        <>
          <div className="w-[90%] min1141:w-[80%] flex items-center justify-center">
            <SelectAdornment
              label="Select your department"
              important={true}
              items={oasisDepartments}
              setValue={setDepartment}
              isError={errors.includes("department") ? true : false}
              error="You didn't indicate your department in the Oasis"
            />
          </div>
        </>
      )}
      <button
        onClick={validateBioData}
        className={`buttonPrimary text-sm mt-[50px] min641:w-[50%] min1141:w-[80%]`}
      >
        Next
      </button>
    </>
  );
};

export default BioDataForm;

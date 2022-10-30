import InputAdornment from "components/utils/form-elements/input-adornment";
import RadioGroup from "components/utils/form-elements/radio-group";
import TextAreaComponent from "components/utils/form-elements/text-area";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Form = ({
  submitForm,
  setFirstName,
  setLastName,
  setGender,
  setEmail,
  setAddress,
  setContactNumber,
  setPrayerRequest,
  formErrors,
  scrollPosition,
}) => {
  const [errors, setErrors] = useState(formErrors);
  const altarCall = useSelector((state) => state?.altarCall);
  useEffect(() => {
    setErrors(formErrors);
  }, [formErrors]);

  useEffect(() => {
    console.log("Scrolled");
  }, [scrollPosition]);
  return (
    <div className="flex flex-col gap-2 w-[750px] max1040:w-[90%] mb-[100px] p-[70px] bmd:p-[30px] mx-[auto] items-center justify-center">
      <h1 className="capitalize text-4xl max400:text-3xl text-center font-semibold mb-5">
        Decision Form
      </h1>
      <div className="w-[90%] bmd:w-[100%] flex items-center justify-center">
        <InputAdornment
          isError={errors.includes("firstName") ? true : false}
          error="Please enter your first name"
          className="mt-[50px]"
          label="First Name"
          important={true}
          setValue={setFirstName}
          defaultValue={altarCall?.firstName}
          focus={scrollPosition === "firstName" ? true : false}
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex items-center justify-center">
        <InputAdornment
          isError={errors.includes("lastName") ? true : false}
          error="Please enter your last name"
          label="Last Name"
          important={true}
          setValue={setLastName}
          defaultValue={altarCall?.lastName}
          focus={scrollPosition === "lastName" ? true : false}
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex items-center justify-center">
        <InputAdornment
          label="Email"
          important={true}
          isError={errors.includes("email") ? true : false}
          error="Please enter your email"
          setValue={setEmail}
          defaultValue={altarCall?.email}
          focus={scrollPosition === "email" ? true : false}
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex items-center justify-center">
        <InputAdornment
          isError={errors.includes("contactNumber") ? true : false}
          error="Please enter a valid contact number"
          label="Contact Number"
          important={true}
          setValue={setContactNumber}
          defaultValue={altarCall?.contactNumber}
          focus={scrollPosition === "contactNumber" ? true : false}
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex items-center justify-center">
        <RadioGroup
          items={["Male", "Female"]}
          setValue={setGender}
          label="Select Gender"
          isError={errors.includes("gender") ? true : false}
          error="Please select your gender"
          defaultValue={altarCall?.gender}
          focus={scrollPosition === "gender" ? true : false}
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex items-center justify-center">
        <InputAdornment
          isError={errors.includes("address") ? true : false}
          error="Please enter your address"
          label="Address"
          important={true}
          setValue={setAddress}
          defaultValue={altarCall?.address}
          focus={scrollPosition === "address" ? true : false}
        />
      </div>

      <div className="w-[90%] bmd:w-[100%] flex items-center justify-center">
        <TextAreaComponent
          isError={errors.includes("prayerRequest") ? true : false}
          error="Do you have a prayer request?"
          label="Prayer Request"
          important={true}
          setValue={setPrayerRequest}
          defaultValue={altarCall?.prayerRequest}
          focus={scrollPosition === "prayerRequest" ? true : false}
        />
      </div>

      <button
        className={`buttonPrimary text-sm w-[200px]`}
        onClick={submitForm}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;

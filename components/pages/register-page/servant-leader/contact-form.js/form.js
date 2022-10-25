import InputAdornment from "components/utils/form-elements/input-adornment";
import RadioGroup from "components/utils/form-elements/radio-group";
import SelectAdornment from "components/utils/form-elements/select-adornment";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ageRange } from "data/age-range";
import { Icon } from "@iconify/react";

const ContactForm = ({
  setContactNumber,
  setWhatsAppNumber,
  setAgeRange,
  setMedicalCondition,
  contactFormErrors = [],
  validateContact,
  decreasePage,
}) => {
  const [errors, setErrors] = useState(contactFormErrors);
  const [sameAsWhatsAppContact, setSameAsWhatsAppContact] = useState(false);
  const volunteer = useSelector((state) => state?.volunteer);
  useEffect(() => {
    setErrors(contactFormErrors);
  }, [contactFormErrors]);
  return (
    <>
      <div className="grid grid-cols-1 max640:grid-cols-1 max1140:grid-cols-2 w-[90%] min1141:w-[80%] gap-5">
        <div className="w-[100%] flex items-center justify-center">
          <InputAdornment
            isError={errors.includes("contactNumber") ? true : false}
            error="Please enter your contact number"
            className="mt-[50px]"
            label="Contact Number"
            important={true}
            setValue={setContactNumber}
            defaultValue={volunteer?.contactNumber}
          />
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <InputAdornment
            className="max1140min641:mt-[50px]"
            label="WhatsApp Number"
            important={true}
            isError={errors.includes("whatsAppNumber") ? true : false}
            error="Please enter your WhatsApp number"
            setValue={setWhatsAppNumber}
            defaultValue={
              sameAsWhatsAppContact
                ? volunteer?.contactNumber
                : volunteer?.whatsAppNumber
            }
            disabled={sameAsWhatsAppContact ? true : false}
          >
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => {
                if (sameAsWhatsAppContact) {
                  setWhatsAppNumber(volunteer?.contactNumber);
                }
                setSameAsWhatsAppContact((previous) => !previous);
              }}
            >
              <Icon
                icon={`${
                  sameAsWhatsAppContact
                    ? "fluent:checkbox-checked-24-regular"
                    : "fluent:checkbox-unchecked-24-regular"
                }`}
              />{" "}
              Same as contact number
            </div>
          </InputAdornment>
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <SelectAdornment
            label="Age Range"
            important={true}
            items={ageRange}
            setValue={setAgeRange}
            isError={errors.includes("ageRange") ? true : false}
            error="Please select your age range"
            defaultValue={volunteer?.ageRange}
          />
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <RadioGroup
            items={["Yes", "No"]}
            setValue={setMedicalCondition}
            label="Do you have any medical condition that requires special accomodation?"
            isError={errors.includes("medicalCondition") ? true : false}
            error="Please indicate whether you have such medical condition"
            defaultValue={volunteer?.medicalCondition}
          />
        </div>
      </div>

      <div className="w-[90%] min1141:w-[80%] flex items-center justify-center gap-5 max530:flex-col mt-[50px]">
        <button
          onClick={decreasePage}
          className={`buttonPrimary text-sm w-[40%] max530:w-[100%]`}
        >
          Go Back
        </button>
        <button
          onClick={validateContact}
          className={`buttonPrimary text-sm w-[40%] max530:w-[100%]`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ContactForm;

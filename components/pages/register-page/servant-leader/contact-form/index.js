import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVolunteer } from "redux/volunteer";
import ContactForm from "./form";
import { ValidateMobile } from "components/utils/ValidateMobile";
import { useRouter } from "next/router";

const ContactFormPage = () => {
  const [contactFormErrors, setContactFormErrors] = useState([]);
  const volunteer = useSelector((state) => state?.volunteer);
  const { contactNumber, whatsAppNumber, ageRange, medicalCondition } =
    volunteer;
  const dispatch = useDispatch();
  const router = useRouter();

  const validateContact = () => {
    if (checkContactForm()) {
      router.push({ pathname: "/volunteer/2" }, undefined, { shallow: true });
      return true;
    } else return false;
  };

  useEffect(() => {
    let errors = [...contactFormErrors];
    if (errors.indexOf("contactNumber") > -1) {
      if (ValidateMobile(contactNumber)) {
        errors.splice(errors.indexOf("contactNumber"), 1);
        errors.indexOf("whatsAppNumber") > -1
          ? errors.splice(errors.indexOf("whatsAppNumber"), 1)
          : "";
      }
    }
    if (errors.indexOf("whatsAppNumber") > -1) {
      if (ValidateMobile(whatsAppNumber))
        errors.splice(errors.indexOf("whatsAppNumber"), 1);
    }
    if (errors.indexOf("ageRange") > -1) {
      if (ageRange.length > 1) errors.splice(errors.indexOf("ageRange"), 1);
    }
    if (errors.indexOf("medicalCondition") > -1) {
      if (medicalCondition.length > 1)
        errors.splice(errors.indexOf("medicalCondition"), 1);
    }
    if (errors.length !== contactFormErrors.length) {
      setContactFormErrors(errors);
    }
  }, [
    contactNumber,
    whatsAppNumber,
    ageRange,
    medicalCondition,
    contactFormErrors,
  ]);

  const checkContactForm = useCallback(() => {
    let errors = [];
    if (!ValidateMobile(contactNumber)) errors.push("contactNumber");
    if (!ValidateMobile(whatsAppNumber)) errors.push("whatsAppNumber");
    if (ageRange.length < 1) errors.push("ageRange");
    if (medicalCondition.length < 1) errors.push("medicalCondition");
    if (errors.length > 0) {
      setContactFormErrors(errors);
      return false;
    } else {
      setContactFormErrors([]);
      return true;
    }
  }, [contactNumber, whatsAppNumber, ageRange, medicalCondition]);

  return (
    <ContactForm
      setContactNumber={(value) =>
        dispatch(setVolunteer({ ...volunteer, contactNumber: value }))
      }
      setWhatsAppNumber={(value) => {
        console.log("value");
        dispatch(setVolunteer({ ...volunteer, whatsAppNumber: value }));
      }}
      setAgeRange={(value) =>
        dispatch(setVolunteer({ ...volunteer, ageRange: value }))
      }
      setMedicalCondition={(value) =>
        dispatch(setVolunteer({ ...volunteer, medicalCondition: value }))
      }
      validateContact={validateContact}
      decreasePage={() => router.push("/volunteer")}
      contactFormErrors={contactFormErrors}
    />
  );
};

export default ContactFormPage;

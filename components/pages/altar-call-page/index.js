/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from "react";
import Form from "./form";
import Welcome from "./welcome";
import { determineScroll } from "./ScrollLogic";
import toast from "react-hot-toast";
import { validateEmail } from "components/utils/ValidateEmail";
import { useSelector, useDispatch } from "react-redux";
import { setAltarCall } from "redux/altarCall";
import Loader from "components/utils/loader.js";
import { useAddAltarCallMutation } from "services/AltarCallService";
import { altarCallType } from "types/altarCall";
import { useRouter } from "next/router";
function AltarCallComponent({}) {
  const [formErrors, setFormErrors] = useState([]);
  const [scrollPosition, setScrollPosition] = useState("");
  const altarCall = useSelector((state) => state?.altarCall);
  const [addAltarCall, isSuccess] = useAddAltarCallMutation();
  const [loading, setLoading] = useState(false);
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    gender,
    address,
    prayerRequest,
  } = altarCall;
  const dispatch = useDispatch();
  const router = useRouter();

  const submitForm = async () => {
    setLoading(true);
    const validated = checkBioDataForm();
    if (validated) {
      await addAltarCall(altarCall);
      if (isSuccess) {
        dispatch(setAltarCall(altarCallType));
        setLoading(false);
        toast.success("Your form has been submitted successfully");
        router.push("/altar-call");
      } else {
        setLoading(false);
        toast.error("An error occurred");
      }
    } else {
      setLoading(false);
      toast.error("Some fields are missing");
    }
  };

  useEffect(() => {
    let errors = [...formErrors];
    if (errors.indexOf("firstName") > -1) {
      if (firstName.length > 1) errors.splice(errors.indexOf("firstName"), 1);
    }
    if (errors.indexOf("lastName") > -1) {
      if (lastName.length > 1) errors.splice(errors.indexOf("lastName"), 1);
    }
    if (errors.indexOf("email") > -1) {
      if (validateEmail(email)) errors.splice(errors.indexOf("email"), 1);
    }
    if (errors.indexOf("contactNumber") > -1) {
      if (contactNumber.length > 1)
        errors.splice(errors.indexOf("contactNumber"), 1);
    }
    if (errors.indexOf("gender") > -1) {
      if (gender.length > 1) errors.splice(errors.indexOf("gender"), 1);
    }
    if (errors.indexOf("address") > -1) {
      if (address.length > 1) errors.splice(errors.indexOf("address"), 1);
    }
    if (errors.indexOf("prayerRequest") > -1) {
      if (prayerRequest.length > 1)
        errors.splice(errors.indexOf("prayerRequest"), 1);
    }
    if (errors.length !== formErrors.length) {
      setFormErrors(errors);
    }
  }, [
    firstName,
    formErrors,
    lastName,
    contactNumber,
    email,
    gender,
    address,
    prayerRequest,
  ]);

  const checkBioDataForm = useCallback(() => {
    let errors = [];
    if (firstName.length < 1) errors.push("firstName");
    if (lastName.length < 1) errors.push("lastName");
    if (!validateEmail(email)) errors.push("email");
    if (contactNumber.length < 1) errors.push("contactNumber");
    if (gender.length < 1) errors.push("gender");
    if (address.length < 1) errors.push("address");
    if (prayerRequest.length < 1) errors.push("prayerRequest");
    if (errors.length > 0) {
      setFormErrors(errors);
      setScrollPosition(determineScroll(errors));
      toast.error("Please fill the missing form fields");
      return false;
    } else {
      setFormErrors([]);
      return true;
    }
  }, [
    firstName,
    lastName,
    contactNumber,
    email,
    gender,
    address,
    prayerRequest,
  ]);
  return (
    <>
      {loading && <Loader />}
      <div className="w-[100%] px-[5%] mt-[130px] bmd:mt-[100px] max640:mt-[60px] relative bmd:bg-[#000]">
        <div className="w-[100%] min1140:h-[640px] relative rounded-[50px]">
          <img
            src="/assets/images/hero/jesus-saves.png"
            alt="banner"
            layout="fill"
            className="rounded-[50px] w-[100%]"
            width="100%"
          />
        </div>
      </div>
      <Welcome />
      <Form
        setFirstName={(value) =>
          dispatch(setAltarCall({ ...altarCall, firstName: value }))
        }
        setLastName={(value) =>
          dispatch(setAltarCall({ ...altarCall, lastName: value }))
        }
        setEmail={(value) =>
          dispatch(setAltarCall({ ...altarCall, email: value }))
        }
        setContactNumber={(value) =>
          dispatch(setAltarCall({ ...altarCall, contactNumber: value }))
        }
        setGender={(value) =>
          dispatch(setAltarCall({ ...altarCall, gender: value }))
        }
        setAddress={(value) =>
          dispatch(setAltarCall({ ...altarCall, address: value }))
        }
        setPrayerRequest={(value) =>
          dispatch(setAltarCall({ ...altarCall, prayerRequest: value }))
        }
        formErrors={formErrors}
        scrollPosition={scrollPosition}
        submitForm={submitForm}
      />
    </>
  );
}

export default AltarCallComponent;

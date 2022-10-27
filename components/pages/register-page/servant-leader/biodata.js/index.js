import React, { useState, useEffect, useCallback } from "react";
import BioDataForm from "./form";
import { validateEmail } from "components/utils/ValidateEmail";
import { useSelector, useDispatch } from "react-redux";
import { setVolunteer } from "redux/volunteer";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { determineScroll } from "../ScrollLogic";

const BioData = () => {
  const [biodataformErrors, setBiodataformErrors] = useState([]);
  const [scrollPosition, setScrollPosition] = useState("");
  const volunteer = useSelector((state) => state?.volunteer);
  const {
    firstName,
    lastName,
    email,
    gender,
    isMember,
    isServing,
    yearJoined,
    department,
  } = volunteer;
  const dispatch = useDispatch();
  const router = useRouter();

  const validateBioData = () => {
    if (checkBioDataForm()) {
      console.log(router.query?.id);
      router.push({ pathname: "/volunteer/1" }, undefined, { shallow: true });
      return true;
    } else return false;
  };

  useEffect(() => {
    let errors = [...biodataformErrors];
    if (errors.indexOf("firstName") > -1) {
      if (firstName.length > 1) errors.splice(errors.indexOf("firstName"), 1);
    }
    if (errors.indexOf("firstName") > -1) {
      if (firstName.length > 1) errors.splice(errors.indexOf("firstName"), 1);
    }
    if (errors.indexOf("lastName") > -1) {
      if (lastName.length > 1) errors.splice(errors.indexOf("lastName"), 1);
    }
    if (errors.indexOf("email") > -1) {
      if (validateEmail(email)) errors.splice(errors.indexOf("email"), 1);
    }
    if (errors.indexOf("gender") > -1) {
      if (gender.length > 1) errors.splice(errors.indexOf("gender"), 1);
    }
    if (errors.indexOf("isMember") > -1) {
      if (isMember !== null) errors.splice(errors.indexOf("isMember"), 1);
    }
    if (errors.indexOf("isServing") > -1) {
      if (isServing !== null) errors.splice(errors.indexOf("isServing"), 1);
    }
    if (errors.indexOf("yearJoined") > -1) {
      if (yearJoined.length > 1) errors.splice(errors.indexOf("yearJoined"), 1);
    }
    if (errors.indexOf("department") > -1) {
      if (department.length > 1) errors.splice(errors.indexOf("department"), 1);
    }
    if (errors.length !== biodataformErrors.length) {
      setBiodataformErrors(errors);
    }
  }, [
    firstName,
    biodataformErrors,
    lastName,
    email,
    gender,
    isMember,
    isServing,
    yearJoined,
    department,
  ]);

  const checkBioDataForm = useCallback(() => {
    let errors = [];
    if (firstName.length < 1) errors.push("firstName");
    if (lastName.length < 1) errors.push("lastName");
    if (!validateEmail(email)) errors.push("email");
    if (gender.length < 1) errors.push("gender");
    if (isMember === null) errors.push("isMember");
    if (isMember === "Yes") {
      if (yearJoined.length < 1) errors.push("yearJoined");
      if (isServing === null) errors.push("isServing");
    }
    if (isServing === "Yes") {
      if (department.length < 1) errors.push("department");
    }
    if (errors.length > 0) {
      setBiodataformErrors(errors);
      setScrollPosition(determineScroll(errors));
      toast.error("Please fill the missing form fields");
      return false;
    } else {
      setBiodataformErrors([]);
      return true;
    }
  }, [
    firstName,
    lastName,
    email,
    gender,
    isMember,
    yearJoined,
    isServing,
    department,
  ]);

  return (
    <BioDataForm
      setFirstName={(value) =>
        dispatch(setVolunteer({ ...volunteer, firstName: value }))
      }
      setLastName={(value) =>
        dispatch(setVolunteer({ ...volunteer, lastName: value }))
      }
      setEmail={(value) =>
        dispatch(setVolunteer({ ...volunteer, email: value }))
      }
      setGender={(value) =>
        dispatch(setVolunteer({ ...volunteer, gender: value }))
      }
      setMember={(value) =>
        dispatch(setVolunteer({ ...volunteer, isMember: value }))
      }
      setServe={(value) =>
        dispatch(setVolunteer({ ...volunteer, isServing: value }))
      }
      setDepartment={(value) =>
        dispatch(setVolunteer({ ...volunteer, department: value }))
      }
      validateBioData={validateBioData}
      setYearJoined={(value) =>
        dispatch(setVolunteer({ ...volunteer, yearJoined: value }))
      }
      biodataformErrors={biodataformErrors}
      scrollPosition={scrollPosition}
    />
  );
};

export default BioData;

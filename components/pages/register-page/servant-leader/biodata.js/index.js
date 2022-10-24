import React, { useState, useEffect, useCallback } from "react";
import BioDataForm from "./form";
import { validateEmail } from "components/utils/ValidateEmail";

const BioData = ({ increasePage }) => {
  const [biodataformErrors, setBiodataformErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isMember, setIsMember] = useState(null);
  const [isServing, setIsServing] = useState(null);
  const [yearJoined, setYearJoined] = useState("");
  const [department, setDepartment] = useState("");

  const validateBioData = () => {
    if (checkBioDataForm()) {
      increasePage();
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
    if (isMember) {
      if (yearJoined.length < 1) errors.push("yearJoined");
      if (isServing === null) errors.push("isServing");
    }
    if (isServing) {
      if (department.length < 1) errors.push("department");
    }
    if (errors.length > 0) {
      setBiodataformErrors(errors);
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
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setGender={setGender}
      setMember={setIsMember}
      setServe={setIsServing}
      setDepartment={setDepartment}
      validateBioData={validateBioData}
      setYearJoined={setYearJoined}
      biodataformErrors={biodataformErrors}
    />
  );
};

export default BioData;

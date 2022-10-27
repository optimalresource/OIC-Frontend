import { validateEmail } from "components/utils/ValidateEmail";
import { ValidateMobile } from "components/utils/ValidateMobile";

const ValidateVolunteerObject = (volunteer) => {
  const {
    firstName,
    lastName,
    email,
    gender,
    isMember,
    isServing,
    yearJoined,
    department,
    contactNumber,
    whatsAppNumber,
    ageRange,
    medicalCondition,
    isMedicalPractitioner,
    canLiftHeavyObjects,
    canTakeWeekfOff,
    daysAvailable,
    preferredTeam,
    mediaAbilities,
  } = volunteer;
  let status = true,
    error = [],
    data = null;
  if (firstName.length < 1) {
    error.push("First name is empty");
    status = false;
  }

  if (lastName.length < 1) {
    error.push("Last name is empty");
    status = false;
  }

  if (!validateEmail(email)) {
    error.push("Email is not valid");
    status = false;
  }

  if (gender.length < 1) {
    error.push("Gender was not supplied");
    status = false;
  }

  if (isMember === null) {
    error.push("It is not determined if you are a member of Oasis");
    status = false;
  }

  if (isMember === "Yes") {
    if (yearJoined.length < 1) {
      error.push("Year joined was not selected");
      status = false;
    }

    if (isServing === null) {
      error.push(
        "It is not determined if you are currently serving in a department"
      );
      status = false;
    }

    if (isServing === "Yes") {
      if (department.length < 1) {
        error.push("Department was not selected");
        status = false;
      }
    }
  }

  if (!ValidateMobile(contactNumber)) {
    error.push("Contact number is not valid");
    status = false;
  }

  if (!ValidateMobile(whatsAppNumber)) {
    error.push("WhatsApp number is not valid");
    status = false;
  }

  if (ageRange.length < 1) {
    error.push("Age range is not selected");
    status = false;
  }

  if (medicalCondition.length < 1) {
    error.push("Medical condition is not selected");
    status = false;
  }

  if (isMedicalPractitioner === null) {
    error.push("It is not determined if you are a medical practitioner");
    status = false;
  }

  if (canLiftHeavyObjects === null) {
    error.push("It is not determined if you can lift heavy objects");
    status = false;
  }

  if (canTakeWeekfOff === null) {
    error.push("It is not determined if you can take the week off");
    status = false;
  }

  if (daysAvailable.length < 1) {
    error.push("You did not select the days you will be available");
    status = false;
  }

  if (preferredTeam.length < 1) {
    error.push("It is not determined if you have a preferred team");
    status = false;
  }

  if (preferredTeam === "Media") {
    if (mediaAbilities.length < 1) {
      error.push("You did not select your media skills");
      status = false;
    }
  }

  if (status)
    data = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      isMember: isMember,
      yearJoinOasis: yearJoined,
      isWorker: isServing,
      department: department,
      phoneNumber: contactNumber,
      whatsappNumber: whatsAppNumber,
      ageRange: ageRange,
      hasMedicalCondition: medicalCondition,
      isMedicalPractitioner: isMedicalPractitioner,
      canLiftHeavyObject: canLiftHeavyObjects,
      isWorkOffWork: canTakeWeekfOff,
      daysToBeAvailable: daysAvailable,
      preferredTeam: preferredTeam,
      mediaSkill: mediaAbilities,
    });

  return {
    status,
    data,
    error,
  };
};

export default ValidateVolunteerObject;

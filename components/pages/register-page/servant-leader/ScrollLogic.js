export const determineScroll = (errors) => {
  if (errors.indexOf("firstName") > -1) return "firstName";
  if (errors.indexOf("lastName") > -1) return "firstName";
  if (errors.indexOf("email") > -1) return "email";
  if (errors.indexOf("gender") > -1) return "firstName";
  if (errors.indexOf("isMember") > -1) return "firstName";
  if (errors.indexOf("isServing") > -1) return "firstName";
  if (errors.indexOf("yearJoined") > -1) return "firstName";
  if (errors.indexOf("contactNumber") > -1) return "firstName";
  if (errors.indexOf("whatsAppNumber") > -1) return "firstName";
  if (errors.indexOf("ageRange") > -1) return "firstName";
  if (errors.indexOf("medicalCondition") > -1) return "firstName";
  if (errors.indexOf("isMedicalPractitioner") > -1) return "firstName";
  if (errors.indexOf("canLiftHeavyObjects") > -1) return "firstName";
  if (errors.indexOf("canTakeWeekfOff") > -1) return "firstName";
  if (errors.indexOf("daysAvailable") > -1) return "firstName";
  if (errors.indexOf("preferredTeam") > -1) return "firstName";
  if (errors.indexOf("mediaAbilities") > -1) return "firstName";
};

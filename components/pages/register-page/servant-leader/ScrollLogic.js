export const determineScroll = (errors) => {
  if (errors.indexOf("firstName") > -1) return "firstName";
  if (errors.indexOf("lastName") > -1) return "lastName";
  if (errors.indexOf("email") > -1) return "email";
  if (errors.indexOf("gender") > -1) return "gender";
  if (errors.indexOf("isMember") > -1) return "isMember";
  if (errors.indexOf("isServing") > -1) return "isServing";
  if (errors.indexOf("department") > -1) return "department";
  if (errors.indexOf("yearJoined") > -1) return "yearJoined";
  if (errors.indexOf("contactNumber") > -1) return "contactNumber";
  if (errors.indexOf("whatsAppNumber") > -1) return "whatsAppNumber";
  if (errors.indexOf("whatsAppNumber") > -1) return "whatsAppNumber";
  if (errors.indexOf("medicalCondition") > -1) return "medicalCondition";
  if (errors.indexOf("isMedicalPractitioner") > -1)
    return "isMedicalPractitioner";
  if (errors.indexOf("canLiftHeavyObjects") > -1) return "canLiftHeavyObjects";
  if (errors.indexOf("canTakeWeekfOff") > -1) return "canTakeWeekfOff";
  if (errors.indexOf("daysAvailable") > -1) return "daysAvailable";
  if (errors.indexOf("preferredTeam") > -1) return "preferredTeam";
  if (errors.indexOf("mediaAbilities") > -1) return "mediaAbilities";
};

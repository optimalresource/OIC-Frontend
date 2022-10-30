export const determineScroll = (errors) => {
  if (errors.indexOf("firstName") > -1) return "firstName";
  if (errors.indexOf("lastName") > -1) return "firstName";
  if (errors.indexOf("email") > -1) return "email";
  if (errors.indexOf("contactNumber") > -1) return "contactNumber";
  if (errors.indexOf("gender") > -1) return "firstName";
  if (errors.indexOf("address") > -1) return "address";
  if (errors.indexOf("prayerRequest") > -1) return "prayerRequest";
};

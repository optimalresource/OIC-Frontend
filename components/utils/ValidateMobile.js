export const ValidateMobile = (mobilenumber) => {
  var regmm = "^[+]?[0-9]{4,14}$";
  var regmob = new RegExp(regmm);
  if (regmob.test(mobilenumber) == true) {
    return true;
  } else {
    return false;
  }
};

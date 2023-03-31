// validate a user name should not containe capital letters and any simbles function
const validateUserName = (userName) => {
  const regex = /^[a-z0-9]+$/;
  return regex.test(userName);
};
// another function to valudate mobile number
const validateMobileNumber = (mobileNumber) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(mobileNumber);
};

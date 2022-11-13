function checkIsValidEmail(email) {
  const regex = /[a-z0-9]+@[a-z]+\.[a-z]/;
  return regex.test(email);
}

module.exports = checkIsValidEmail;
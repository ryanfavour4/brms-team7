const regex = /[^A-Za-z0-9\s]/;

function hasSpecialCharacters(input) {
  return regex.test(input);
}

module.exports = hasSpecialCharacters;

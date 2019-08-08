const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.word = !isEmpty(data.word) ? data.word : "";
  data.definition = !isEmpty(data.definition) ? data.definition : "";

  if (Validator.isEmpty(data.word)) {
    errors.word = "Word field is required";
  }
  if (Validator.isEmpty(data.definition)) {
    errors.definition = "Definition field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

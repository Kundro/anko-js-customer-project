const { constants } = require("../../config/constants");

module.exports.CustomerValidator = class CustomerValidator {
  constructor() {}
  Validate(customer) {
    let result = [];
    const phoneNumberRegEx = /^\+?[1-9][0-9]{7,14}$/;
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!customer) return result;

    if (customer.firstName.length > 50) {
      result.push(constants.constants['FirstNameLong']);
    }
    
    if (!customer.lastName || customer.lastName.length == 0) {
      result.push(constants.constants['LastNameReq']);
    } else if (customer.lastName.length > 50) {
        result.push(constants.constants['LastNameLong']);
      } 
    if (customer.addressesList.length < 1) {
      result.push(constants.constants['AddressReq']);
    }
    if (!customer.phoneNumber.match(phoneNumberRegEx)) {
      result.push(constants.constants['WrongPhoneNumber']);
    }
    if (!customer.email.match(emailRegEx)) {
      result.push(constants.constants['WrongEmail']);
    }
    if (customer.notes === null) {
      result.push(constants.constants['NotesReq']);
    }
    return result;
  }
};

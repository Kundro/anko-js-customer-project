const { constants } = require("../../config/constants");

module.exports.AddressValidator = class AddressValidator {
  constructor() {}
  Validate(address) {
    let result = [];

    if (!address) return result;

    if (address.addressLine2.length > 100) {
      result.push(constants.constants["AddressLine2Long"]);
    }

    if (!address.addressLine || address.addressLine.length == 0) {
      result.push(constants.constants["AddressLineReq"]);
    } else if (address.addressLine.length > 100) {
      result.push(constants.constants["AddressLineLong"]);
    }

    if (!address.addressType || address.addressType.length == 0) {
        result.push(constants.constants["AddressTypeReq"]);
      } else if (!(address.addressType === "Shipping" || address.addressType === "Billing")) {
        result.push(constants.constants["AddressTypeWrong"]);
      }
  

    if (!address.city || address.city.length == 0) {
      result.push(constants.constants["CityReq"]);
    } else if (address.city.length > 50) {
      result.push(constants.constants["CityLong"]);
    }

    if (!address.postalCode || address.postalCode.length == 0) {
      result.push(constants.constants["PostalReq"]);
    } else if (address.postalCode.length > 6) {
      result.push(constants.constants["PostalCodeLong"]);
    }

    if (!address.state || address.state.length == 0) {
      result.push(constants.constants["StateReq"]);
    } else if (address.state.length > 20) {
      result.push(constants.constants["StateLong"]);
    }

    if (!address.country || address.country.length == 0) {
        result.push(constants.constants["CountryReq"]);
      } else if (!(address.country === "United States" || address.country === "Canada")) {
        result.push(constants.constants["WrongCountry"]);
      }

    return result;
  }
};

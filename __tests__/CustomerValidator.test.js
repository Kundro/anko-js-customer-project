const { Customer } = require("../src/Entities/Customer");
const { Address } = require("../src/Entities/Address");
const { CustomerValidator } = require("../src/Validators/CustomerValidator");

describe("Should be able to create CustomerValidator and have valid params", () => {
    it("Should not be able to validate customer because customer is null", () => {
        const customer = null;
        let customerValidator = new CustomerValidator();
        expect(customerValidator.Validate(customer)).toEqual([])
    });

  it("Should be able to validate customer without errors", () => {
    const address = new Address(
      "line1",
      "line2",
      "Shipping",
      "Chicago",
      "60666",
      "Illinois",
      "USA",
    );
    let addresses = [];
    addresses.push(address);
    const customer = new Customer(
      "name",
      "surname",
      [address],
      "+12341234567890",
      "mail@mail.ru",
      "note",
      1,
      null,
    );
    let customerValidator = new CustomerValidator();
    expect(customerValidator.Validate(customer)).toEqual([])
});
  
  it("Should not be able to create CustomerValidator because first name", () => {
    const address = new Address(
      "line1",
      "line2",
      "Shipping",
      "Chicago",
      "60666",
      "Illinois",
      "USA",
    );
    let addresses = [];
    addresses.push(address);

    let wrongFirstName = ""; // create wrong first name
    for (let i = 0; i < 51; i++) {
      wrongFirstName += "a";
    }

    const customer = new Customer(
      wrongFirstName,
      "surname",
      addresses,
      "+12341234567890",
      "mail@mail.com",
      "note",
      1,
      null,
    );
    const customerValidator = new CustomerValidator();
    let res = customerValidator.Validate(customer);

    expect(customerValidator).not.toBe(null);
    let resBool = res.includes("First name is too long");
    expect(resBool).toBe(true);
  });

  it("Should not be able to create CustomerValidator because wrong params", () => {
    let addresses = [];

    let wrongNames = ""; // create wrong first name
    for (let i = 0; i < 51; i++) {
      wrongNames += "a";
    }

    const customer = new Customer(
      "name",
      wrongNames,
      addresses,
      "12341234567892123",
      "mailmail.com",
      null,
      1,
      null,
    );
    const customerValidator = new CustomerValidator();
    let res = customerValidator.Validate(customer);

    expect(customerValidator).not.toBe(null);
    expect(res.includes("Last name is too long")).toBe(true);
    expect(res.includes("Required at least 1 address")).toBe(true);
    expect(res.includes("Incorrect phone number format")).toBe(true);
    expect(res.includes("Incorrect email address format")).toBe(true);
    expect(res.includes("Required at least 1 note")).toBe(true);
  });

  it("Should not be able to create CustomerValidator because wrong params", () => {
    let addresses = [1];

    const customer = new Customer(
      "name",
      null,
      addresses,
      "+12341234567890",
      "mail@mail.com",
      "note",
      1,
      null,
    );
    const customerValidator = new CustomerValidator();
    let res = customerValidator.Validate(customer);

    expect(customerValidator).not.toBe(null);
    expect(res.includes("Last name required")).toBe(true);
  });
});

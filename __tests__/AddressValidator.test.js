const { Address } = require("../src/Entities/Address");
const { AddressValidator } = require("../src/Validators/AddressValidator");

describe("Should be able to create AddressValidator and have valid params", () => {
  it("Should not be able to validate address because customer is null", () => {
    const address = null;
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual([]);
  });

  it("Should be able to validate address without errors", () => {
    const address = new Address(
      "line1",
      "line2",
      "Shipping",
      "Chicago",
      "60666",
      "Illinois",
      "Canada",
    );
    let addressValidator = new AddressValidator();
    expect(addressValidator.Validate(address)).toEqual([]);
  });

  it("Should not be able to create AddressValidator because address line is wrong", () => {
      let wrongLine = ""; // create wrong address line 1
      for (let i = 0; i < 101; i++) {
        wrongLine += "a";
      }
    const address = new Address(
      wrongLine,
      "line2",
      "Shipping",
      "Chicago",
      "60666",
      "Illinois",
      "USA",
    );

    const addressValidator = new AddressValidator();
    let res = addressValidator.Validate(address);

    expect(addressValidator).not.toBe(null);
    let resBool = res.includes("Address line is too long");
    expect(resBool).toBe(true);
  });

  it("Should not be able to create AddressValidator because wrong params", () => {
    let wrongLine = ""; // create wrong first name
    for (let i = 0; i < 101; i++) {
        wrongLine += "a";
    }
    const address = new Address(
        wrongLine,
        wrongLine,
        "test",
        wrongLine,
        "60666000",
        wrongLine,
        "Belarus",
      );
    const addressValidator = new AddressValidator();
    let res = addressValidator.Validate(address);

    expect(addressValidator).not.toBe(null);
    expect(res.includes("Address line is too long")).toBe(true);
    expect(res.includes("Address line 2 is too long")).toBe(true);
    expect(res.includes("Wrong address type")).toBe(true);
    expect(res.includes("City name is too long")).toBe(true);
    expect(res.includes("Postal code is too long")).toBe(true);
    expect(res.includes("State name is too long")).toBe(true);
    expect(res.includes("Wrong country name")).toBe(true);
  });

  it("Should not be able to create AddressValidator because wrong params", () => {
       const address = new Address(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      );
    const addressValidator = new AddressValidator();
    let res = addressValidator.Validate(address);

    expect(addressValidator).not.toBe(null);
    expect(res.includes("Address line required")).toBe(true);
    expect(res.includes("Address type required")).toBe(true);
    expect(res.includes("City name required")).toBe(true);
    expect(res.includes("Postal code required")).toBe(true);
    expect(res.includes("State name required")).toBe(true);
    expect(res.includes("Country name required")).toBe(true);
  });
});

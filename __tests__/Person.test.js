const { Person } = require("../src/Entities/Person");

describe("Should be able to create Person and have names", () => {
  it("Should be able to create Person", () => {
    const person = new Person("name", "surname");
    expect(person).not.toBe(null);
    expect(Person).not.toBe(null);
  });
  it("Should be able to have first name", () => {
    const person = new Person("name", "surname");
    expect(Person).not.toBe(null);
    expect(person.firstName).toBe("name");
  });
  it("Should be able to have last name", () => {
    const person = new Person("name", "surname");
    expect(person.lastName).toBe("surname");
  });
});

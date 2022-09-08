const {Customer} = require("../src/Entities/Customer");
const {Address} = require("../src/Entities/Address");

describe("Should be able to create Customer and have params", ()=>{
    it("Should be able to create Customer", ()=>{
        const customer = new Customer("name", "surname", ["address1", "address2"],"+12341234567890","mail@mail.com", "note", 1, null);
        expect(customer).not.toBe(null);
        expect(Customer).not.toBe(null);
    })
    it("Should be able to have first name", ()=>{
        const address1 = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        const address2 = new Address("test1", "test2", "Billing","New York","21002", "NY", "USA");
        let addressesList = [];
        addressesList.push(address1, address2);
        const dateNow = Date.now();
        const customer = new Customer("name", "surname", addressesList,"+12341234567890","mail@mail.com", "note", 1, dateNow);

        expect(customer.firstName).toBe("name");
        expect(customer.lastName).toBe("surname");
        expect(customer.addressesList[0].addressLine).toBe("line1");
        expect(customer.addressesList[1]).toBe(address2);
        expect(customer.phoneNumber).toBe("+12341234567890");
        expect(customer.email).toBe("mail@mail.com");
        expect(customer.notes).toBe("note");
        expect(customer.totalPurchasesAmount).toBe(1);
        expect(customer.lastPurchaseDate).toBe(dateNow);
    })
})
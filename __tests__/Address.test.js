const {Address} = require("../src/Entities/Address");

describe("Should be able to create Customer and have params", ()=>{
    it("Should be able to create Address", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address).not.toBe(null);
        expect(Address).not.toBe(null);
    })
    it("Should be able to have address line 1", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address.addressLine).toBe("line1");
    })
    it("Should be able to have address line 2", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address.addressLine2).toBe("line2");
    })
    it("Should be able to have address type", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address.addressType).toBe("Shipping");
    })
    it("Should be able to have city name", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address.city).toBe("Chicago");
    })
    it("Should be able to have postal code", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address.postalCode).toBe("60666");
    })
    it("Should be able to have state name", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address.state).toBe("Illinois");
    })
    it("Should be able to have country name", ()=>{
        const address = new Address("line1", "line2", "Shipping","Chicago","60666", "Illinois", "USA");
        expect(address.country).toBe("USA");
    })
})
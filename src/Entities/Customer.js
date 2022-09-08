const {Person} = require("./Person");

module.exports.Customer = class Customer extends Person {
    constructor(firstName, lastName, addressesList, phoneNumber, email, notes, totalPurchasesAmount, lastPurchaseDate){
        super(firstName, lastName);
        this.addressesList = addressesList;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.notes = notes;
        this.totalPurchasesAmount = totalPurchasesAmount;
        this.lastPurchaseDate = lastPurchaseDate;
    }
}
// DONE: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
//INFO: Test 1 Manager class extends class Employee and adds office number property
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

//INFO: Test 2 getRole() method overwrites to display Manager
    getRole() {
        return `Manager`;
    }

//INFO: Test 3 getOffice() method to get office number
    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }
}

module.exports = Manager;
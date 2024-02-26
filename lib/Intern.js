// DONE: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

//INFO: Test 1 Intern class extends Employee class and adds school property
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

//INFO: Test 2 getRole method returns Intern

    getRole() {
        return `Intern`;
    }

//INFO: Test 3 getSchool method displays the school
    getSchool () {
        console.log(this.school);
        return this.school;
    }

}

module.exports = Intern;
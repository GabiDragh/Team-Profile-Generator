// DONE: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

//INFO: Test 1 Engineer class extends Employee class and adds github account information
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

//INFO: Test 2 getRole method should return Engineer
    getRole() {
        return `Engineer`;
    }

//INFO: Test 3 getGithub method gets the username 
    getGithub() {
        console.log(this.github);
        return this.github;
    }
}

module.exports = Engineer;
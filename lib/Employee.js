// DONE: Write code to define and export the Employee class
//Test 1 - Employee is an object
class Employee {
//Set name, id and email via constructor arguments
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

//getName() method to get employee name
    getName() {
        console.log(`${this.name}`);
        return this.name;
    }
//getId() method to get employee id
    getId() {
        console.log(`${this.name}`, this.id);
        return this.id;
    }

//getEmail() method to get employee email
    getEmail() {
        console.log(`${this.name}`, this.id, `${this.email}`);
        return this.email;
    }

//getRole() method to get employee info
    getRole() {
        return `Employee`; 
    }
}

module.exports = Employee;
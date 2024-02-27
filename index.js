const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateTeam = require("./utils/generateTeam.js"); //page template linked

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./utils/generateTeam.js");


//DONE: Write Code to gather information about the development team members, and render the HTML file.

//DONE: Create a team members array to hold all employees
    let teamMembers = []; //let alright?

//DONE: Team manager questions (name, id, email, office number)
    const managerQuestions = [
        {
            type: `input`,
            message: `Please enter the team manager's name.`,
            name: `name`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
        {
            type: `input`,
            message: `Please enter the team manager's id.`,
            name: `id`,
            validate: function (input) {
                return !isNaN(input) && parseInt(input) > 0; //validation for user input - positive number
            }
        }, 
        {
            type: `input`,
            message: `Please enter the team manager's email.`,
            name: `email`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
        {
            type: `input`,
            message: `Please enter the team manager's office number.`,
            name: `officeNumber`,
            validate: function (input) {
                return !isNaN(input) && parseInt(input) > 0; //validation for user input - positive number
            }
        },
    ]
    console.log(managerQuestions);

//DONE: Options question (add engineer, intern or finish)
    const menuOptions = {
        type: `list`,
        mesage: `What would you like to do next?`,
        name: `menu`,
        choices: [`Add an engineer`, `Add an Intern`, `Finish building the team`]
    }

    console.log(menuOptions);
        
//DONE: Engineer questions (name, id, email, github) -> return to menu
    const engineerQuestions = [
        {
            type: `input`,
            message: `Please enter the engineer's name.`,
            name: `name`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
        {
            type: `input`,
            message: `Please enter the engineer's id.`,
            name: `id`,
            validate: function (input) {
                return !isNaN(input) && parseInt(input) > 0; //validation for user input - positive number
            }
        },
        {
            type: `input`,
            message: `Please enter the engineer's email.`,
            name: `email`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
        {
            type: `input`,
            message: `Please enter the engineer's GitHub profile username.`,
            name: `github`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
    ]
    console.log(engineerQuestions);

//DONE: Intern questions (name, id, email, school) -> return to menu
    const internQuestions = [
        {
            type: `input`,
            mesage: `Please enter the intern's name.`,
            name: `name`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
        {
            type: `input`,
            mesage: `Please enter the intern's id.`,
            name: `id`,
            validate: function (input) {
                return !isNaN(input) && parseInt(input) > 0; //validation for user input - positive number
            }
        },
        {
            type: `input`,
            mesage: `Please enter the intern's email.`,
            name: `email`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
        {
            type: `input`,
            mesage: `Please enter the school the intern has graduated.`,
            name: `school`,
            validate: function (input) {
                return input !== ``; //empty string validation
         }
        },
    ]

    console.log(internQuestions);

//DONE: Function to add manager
    function addManager() {
        inquirer
        .prompt(managerQuestions)
        .then(function(answers) {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); //instantiate Manager
            teamMembers.push(manager); //add manager to teamMembers array
            console.log(`You have added the team Manager.`)
            promptMenu(); //call function to ask menuOptions
        });
    }

//DONE: Function to add engineer
    function addEngineer() {
        inquirer
        .prompt(engineerQuestions)
        .then(function(answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
            promptMenu();
        });
    }

//DONE: Function to add intern
    function addIntern() {
        inquirer
        .prompt(internQuestions)
        .then(function(answers) {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            promptMenu();
        });
    }

//DONE: Function to call menu (call functions above depending on user menu option)
    function promptMenu() {
        inquirer
        .prompt(menuOptions)
        .then (function(answers) {
           if (answers.menu === `Add an engineer`) {
            addEngineer();
           } else if (answers.menu === `Add an Intern`) {
            addIntern();
           } else {
            buildTeam();
           }
        });
    }


// DONE: Function to build team (generate html using the page-template.js file provided ())
    function buildTeam() {
    const htmlTeam = generateTeam(teamMembers);
    const output = outputPath;
    fs.writeFile(output, htmlTeam, function(err) {
        if(err) {
            console.error(`Error writing file`, err);
        } else {
            console.log(`Team file generated successfully!`);
        }
    });
    }

//DONE: Initialize function - call add manager function first
    function init() {
        console.log(`Welcome to Team Profile Generator. Start by adding a Manager:`);
        addManager();
    }

init();

// FIXME: page-template cosmetic edits
// DONE: validation
// FIXME: catch error for team members functions


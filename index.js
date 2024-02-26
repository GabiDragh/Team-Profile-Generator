const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateTeam = require("./src/page-template.js";) //page template linked

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//DONE: Create a team members array to hold all employees
    let teamMembers = []; //let alright?

//DONE: Team manager questions (name, id, email, office number)
    const managerQuestions = [
        {
            type: `input`,
            message: `Please enter the team manager's name.`,
            name: `name`,
            //FIXME: 
        //     validate: function (input) {
        //         return input !== ``; empty string validation
        //  }
        },
        {
            type: `input`,
            message: `Please enter the team manager's id.`,
            name: `id`,
            validate: function (input) {
                return !isNaN(input) && parseInt(input) > 0;
            }
        }, //validation for user input - positive number
        {
            type: `input`,
            message: `Please enter the team manager's email.`,
            name: `email`,
            // validate function? 
        },
        {
            type: `input`,
            message: `Please enter the team manager's office number.`,
            name: `officeNumber`,
            // validate function? 
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
            // validate: ? 
        },
        {
            type: `input`,
            message: `Please enter the engineer's id.`,
            name: `id`,
            // validate: ? 
        },
        {
            type: `input`,
            message: `Please enter the engineer's email.`,
            name: `email`,
            // validate: ? 
        },
        {
            type: `input`,
            message: `Please enter the engineer's GitHub profile username.`,
            name: `github`,
            // validate: ? 
        },
    ]
    console.log(engineerQuestions);

//DONE: Intern questions (name, id, email, school) -> return to menu
    const internQuestions = [
        {
            type: `input`,
            mesage: `Please enter the intern's name.`,
            name: `name`,
            // validate: ?
        },
        {
            type: `input`,
            mesage: `Please enter the intern's id.`,
            name: `id`,
            // validate: ?
        },
        {
            type: `input`,
            mesage: `Please enter the intern's email.`,
            name: `email`,
            // validate: ?
        },
        {
            type: `input`,
            mesage: `Please enter the school the intern has graduated.`,
            name: `school`,
            // validate: ?
        },
    ]

    console.log(internQuestions);

//TODO: When finished -> generate HTML

//TODO: init function for inquirer (.prompt and .then) -> initialize function
//TODO: Function to add manager
//TODO: Function to add engineer
//TODO: Function to add intern
//TODO: Function to push team members in the teamMembers array
//TODO: Function to generate html using the page-template.js file provided ()
//TODO: Function to call functions above depending on user menu option 
    inquirer
    .prompt(managerQuestions)
    .then(answers => {
        console.log(answers);
    });


// init();


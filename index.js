const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//TODO: Create a team members array to hold all employees
    let teamMembers = []; //let alright?

//TODO: Team manager questions (name, id, email, office number)
    const managerQuestions = [
        {
            type: `input`,
            message: `Please enter the team manager's name.`,
            name: `name`,
            // validate function? 
        },
        {
            type: `input`,
            message: `Please enter the team manager's id.`,
            name: `name`,
            // validate function? 
        },
        {
            type: `input`,
            message: `Please enter the team manager's email.`,
            name: `name`,
            // validate function? 
        },
        {
            type: `input`,
            message: `Please enter the team manager's office number.`,
            name: `name`,
            // validate function? 
        },
    ]
    console.log(managerQuestions);

//TODO: Options question (add engineer, intern or finish)
    const menuOptions = {
        type: `list`,
        mesage: `What would you like to do next?`,
        name: `menu`,
        choices: [`Add an engineer`, `Add an Intern`, `Finish building the team`]
    }

    console.log(menuOptions);
        
//TODO: Engineer questions (name, id, email, github) -> return to menu
    const engineerQuestions = [
        {
            type: `input`,
            message: `Please enter the engineer's name`,
            name: `name`,
            // validate: ? 
        },
        {
            type: `input`,
            message: `Please enter the engineer's id`,
            name: `id`,
            // validate: ? 
        },
        {
            type: `input`,
            message: `Please enter the engineer's email`,
            name: `email`,
            // validate: ? 
        },
        {
            type: `input`,
            message: `Please enter the engineer's GitHub profile username`,
            name: `username`,
            // validate: ? 
        },
    ]

//TODO: Intern questions (name, id, email, school) -> return to menu

//TODO: When finished -> generate HTML

//TODO: init function for inquirer (.prompt and .then) -> initialize function
// function init() {
//     inquirer
//     .prompt(managerQuestions)
//     .then(answers) => {
//         const userAnswers = answers;
//         console.log(userAnswers);
//     }
// }

// init();


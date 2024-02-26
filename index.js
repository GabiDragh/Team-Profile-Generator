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

//TODO: Team manager questions (name, id, email, office number)

//TODO: Options question (add engineer, intern or finish)

//TODO: Engineer questions (name, id, email, github) -> return to menu

//TODO: Intern questions (name, id, email, school) -> return to menu

//TODO: When finished -> generate HTML

//TODO: init function for inquirer (.prompt and .then) -> initialize function


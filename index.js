//packages needed for this application
const inquirer = require("inquirer");
//const generateMarkdown = require("./utils/generateMarkdown");

//an array of questions for user input
const questions = [
  {
    type: "input",
    name: "proj-title",
    message: "What is your application title?",
  },
  {
    type: "input",
    name: "proj-description",
    message: "Please succinctly describe your application.",
  },
  {
    type: "input",
    name: "proj-installation",
    message: "How should the user install your application?",
  },
  {
    type: "input",
    name: "proj-usage",
    message: "How should the user use or access your application?",
  },
  {
    type: "list",
    name: "proj-license",
    message:
      "Under what license are you contributing/releasing your application?",
    choices: [
      "Apache License, Version 2.0",
      "GNU General Public License v3.0",
      "The MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "Simplified" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "proj-contributions",
    message: "Who contributed to your application?",
  },
  {
    type: "input",
    name: "proj-tests",
    message: "How should potential users test your application?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();

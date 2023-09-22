//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');

//an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your application title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please succinctly describe your application.",
  },
  {
    type: "input",
    name: "installation",
    message: "How should the user install your application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How should the user use or access your application?",
  },
  {
    type: "list",
    name: "license",
    message:
      "Under what license are you contributing/releasing your application?",
    choices: [
      "Apache License Version 2.0",
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
    name: "contributions",
    message: "Who contributed to your application?",
  },
  {
    type: "input",
    name: "tests",
    message: "How should potential users test your application?",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email."
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your github username."
  }
];

//function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log('Generating README now');
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();

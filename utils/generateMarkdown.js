//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/license-${license.replace(/ /g,"_")}-blue.svg)`;
    }
    return "";
}

//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return `[License](#license)`;
    }
    return '';
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `## License \n This project is licensed under ${license}.`;
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributions](#contributions)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependnecies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributions

${data.contributions}

## Tests

To run tests, run the following comand:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions, feel free to contact me at ${data.email}.

Liked this project? Check out my other work at [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
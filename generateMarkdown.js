// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-${color}.svg)`
  } 
return " ";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Take strings out of responses and then write to file
function generateMarkdown(responses) {
  return `
  # <${responses.title}>

  # Github

  ${renderLicenseBadge(responses.license, responses.color)}
  ## Description
  ## ${responses.description}

  ## Table of Contents
  * [Installation](#Installation)  
  * [Usage](#Usage)
  * [License](#License)  
  * [Contributing](#Contributing)  
  * [Tests](#Tests)  
  * [Questions](#Questions)

  ## Installation
  > npm i
  ## Usage
  ${responses.usage}
  ## License
  This project is licensed under the MIT license.
  ## Contributing
  ${responses.contributing}
  ## Tests
  To run tests, run the following command: 
  > npm test
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${responses.email}.  You can find more of my work at github.com/${responses.username}.
`;
}

module.exports = generateMarkdown;

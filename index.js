// TODO: Include packages needed for this application
// require generateMarkdown
// require inquirer

const rxjs = require('rxjs');
const fs = require('fs');
// const { generate } = require("rxjs");
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage for this project?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
        },
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'license',
            choices: ['MIT', 'Mozilla', 'Perl'],
        },
    ])
    .then((responses) => {
        const filename = "README.md";

        fs.writeFile(filename, generateMarkdown({...responses}), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

// const questions = [
//     {
//         type: 'input',
//         name: 'description',
//         message: 'What is the description of your project?'
//     }
// ];

//When I want the above to work, you can call inquirer.prompt(questions).then

// .then((responses) => {
//     //Need to pass responses into generateMarkdown

// }

// );


// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

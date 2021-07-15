// TODO: Include packages needed for this application
// require generateMarkdown
// require inquirer

const rxjs = require('rxjs');
const fs = require('fs');
// const { generate } = require("rxjs");
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
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
            choices: ['MIT', 'Mozilla', 'Perl', 'None'],
        },
        {
            type: 'list',
            message: 'What color do you want your license badge to be?',
            name: 'color',
            choices: ['blueviolet', 'green', 'blue', 'yellow'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
    ]

    inquirer
    .prompt(questions)
    .then((responses) => {
        const filename = "README.md";

        //Passing the responses from the user into the README file using the generateMarkdown function
        fs.writeFile(filename, generateMarkdown({...responses}), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

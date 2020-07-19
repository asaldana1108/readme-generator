const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is you GitHub username? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'GNU LGPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Boost Software', 'Unlicense']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage information.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any credits or collaborators.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any intructions to test the project.'
    }

];

// function to write README file
function writeToFile(data) {
    
    fs.writeFile('./result/README.md', data, err => {
        if (err) throw err;

        console.log('Generating README file...');
    });
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
}

// function call to initialize program
init()
    .then(userInput => {
        return generateReadMe(userInput);
    })
    .then(markdownData => {
        return writeToFile(markdownData);
    }); 

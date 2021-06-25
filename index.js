// TODO: Include packages needed for this application
const generateREADME = require('./generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your project.',
        },
        {
            type: 'input',
            name: 'dependencies',
            message: 'Describe any prerequisites, libraries, OS version, etc., needed before installing program.',

        },
        {
            type: 'input',
            name: 'execution',
            message: 'List the steps needed to run or execute your program.',
        },
        {
            type: 'input',
            name: 'authors',
            message: 'Please list the author of this project and any contributors.',
        },
        {
            type: 'input',
            name: 'acknowledgments',
            message: 'If any acknowledgments, please list them here.',
        },
        {
            type: 'list',
            choices: ["MIT", "IBM", "ISC"],
            name: 'license',
            message: 'Type what license this product is under.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter a link to your Github profile.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email address.',
        },
    ]);
}

// TODO: Create a function to write README file
// function generateREADME(answers) {

//     return `# Project Title

// Simple overview of use/purpose.
    
// # Table Of Contents

// [Description](#Description)
// [Getting Started](#Dependencies)
// [Usage](#Usage)
// [Authors](#Authors)
// [Acknowledgments](#Acknowledgments)
// [Licensing](#License)
// [Questions](#Questions)


// ## Description
    
// ${answers.description}
    
// ## Getting Started
    
// ### Dependencies
    
// ${answers.dependencies}
    
// ### Usage
    
// ${answers.execution}
    
// ## Authors
    
// ${answers.authors}
    
    
// ## Acknowledgments
    
// ${answers.acknowledgments}

// ## License

// This project is licensed under the ${answers.license} License - see the LICENSE.md file for details



// ## Questions
    
// How To contact me? 

// Link to my Github: ${answers.github}

// Email Me!: ${answers.email}
// `
// }

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => generateREADME(answers)).then((data) => writeFileAsync("hello.md", data))
        .then(() => console.log('Successfully Generated README.md'))
        .catch((err) => console.error(err));
};
// Function call to initialize app
init();
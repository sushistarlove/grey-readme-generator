// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'desciption',
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
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },

        {
            type: 'input',
            name: 'license',
            message: 'Type what license this product is under.',
        },
    ]);
}

// TODO: Create a function to write README file
function generateREADME(answers) {
    `# Project Title

    Simple overview of use/purpose.
    
    ## Description
    
    ${answers.description}
    
    ## Getting Started
    
    ### Dependencies
    
    ${answers.dependencies}
    
    ### Executing program
    
    ${answers.execution}
    
    ## Authors
    
    ${answers.authors}
    
    
    ## Acknowledgments
    
    ${answers.acknowledgments}

    ## License

    This project is licensed under the ${answers.license} License - see the LICENSE.md file for details
    `
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('generateMarkdown.js', generateREADME(answers)))
        .then(() => console.log('Successfully Generated README.md'))
        .catch((err) => console.error(err));
};
// Function call to initialize app
init();
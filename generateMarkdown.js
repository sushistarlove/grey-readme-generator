// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": 
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "ISC": 
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

    case "IBM":
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";

    default:
    return "none";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
 
  return `# Project Title

  Simple overview of use/purpose.
      
  # Table Of Contents
  
  [Description](##Description)  
  [Getting Started](##Dependencies)  
  [Usage](##Usage)  
  [Authors](##Authors)  
  [Acknowledgments](##Acknowledgments)  
  [Licensing](##License)  
  [Questions](##Questions)  
  
  
  ## Description
      
  ${answers.description}
      
  ## Getting Started
      
  ### Dependencies
      
  ${answers.dependencies}
      
  ### #
      
  ${answers.execution}
      
  ## Authors
      
  ${answers.authors}
      
      
  ## Acknowledgments
      
  ${answers.acknowledgments}
  
  ## License
  ${renderLicenseBadge(answers.license)}  
  This project is licensed under the ${answers.license}  - see the LICENSE.md file for details
  
  
  
  ## Questions
      
  How To contact me? 
  
  Link to my Github: ${answers.github}
  
  Email Me!: ${answers.email}
  `
}

module.exports = generateMarkdown;
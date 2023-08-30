// install packages
const inquirer = require('inquirer')
const fs = require('fs')

function readmeFormat ({title, userStory, acceptanceCriteria, description, tableOfContents, installation, usage, credits, license}) {
    return `# README-generator
    
    ## User Story
    
    ## Acceptance Criteria
    
    ## Description
    
    ## Table Of Contents
    
    ## Installation
    
    ## Usage
    
    ## Credits
    
    ## License
    
    ## Screenshot(s)`;
}

// prompt the user for the README input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this application?',
        },
        {
            type: 'input',
            name: 'userStory',
            message: 'What is the user story for this application?',
        },
        {
            type: 'input',
            name: 'acceptanceCriteria',
            message: 'What is the acceptance criteria for this application?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of this application?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'provide directions for the installation of this application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the title of this application?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What is the title of this application?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is the title of this application?',
        },
])

// write a function that autocomletes the TOC for the file based off the users input
function tableOfContents()
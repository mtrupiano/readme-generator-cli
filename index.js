const inquirer  = require('inquirer');
const fs        = require('fs');
const prompts   = require('./prompts.json');
const licenses  = require('./licenseBadges.json');


function writeToFile(fileName, data) {

    let licenseStr = "";
    let licenseBadgeStr = "";

    for (let i = 0; i < data.licenses.length; i++) {
        let licenseObj = licenses.find(element => element.name === data.licenses[i])
        licenseBadgeStr += licenseObj.badgeMD + " ";
        licenseStr += " - " + licenseObj.descr + "\n\r";
    }

    const content = 
`# ${data.title}

${licenseBadgeStr}

## Description

${ data.description }

## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [Testing](#testing)
 - [Questions](#questions)
 - [Licensing](#licensing)

## Installation

${ data.installInstructions }

## Usage

${ data.usageInfo }

## License

This project is licensed under:
${licenseStr}

## Contributing

${ data.contributionGuidelines }

## Testing

${ data.testInstructions }

## Questions

Contact me using the links below with any questions.

 - [github.com/${data.githubUsername}](https://github.com/${data.githubUsername})
 - [${data.email}](${data.email})`;

    fs.writeFile(fileName, content, function(err) {
        if (err) {
            console.log(err);
        }
    });

}

function init() {
    inquirer.
        prompt(prompts).then(function (response) {  
            writeToFile("README.md", response);
        });
}

init();
const inquirer  = require('inquirer');
const fs        = require('fs');
const prompts   = require('./prompts.json');
const licenses  = require('./licenseBadges.json');

// const arr = [1, 3, 5, -2];
// for (let element of arr) {
//     console.log(element);
// }

function writeToFile(fileName, data) {
    const br = "\n\r\n\r";
    let title = "# " + data.title + br;
    let description = "## Description" + br + data.description + br;
    let tableOfContents = 
        "## Table of Contents\n\r" + 
        " - [Installation](#installation)\n\r" + 
        " - [Usage](#usage)\n\r" + 
        " - [Licensing](#licensing)\n\r" + 
        " - [Contributions](#contributions)\n\r" + 
        " - [Testing](#testing)\n\r" + 
        " - [Questions](#questions)" + br;

    let installInstr = "## Installation" + br + data.installInstructions + br;
    let usage        = "## Usage" + br + data.usageInfo + br;
    let contribution = "## Contributions" + br + data.contributionGuidelines + br;
    let testInstr = "## Testing" + br + data.testInstructions + br;
    let questions = "## Questions" + br + 
        ` - [github.com/${data.githubUsername}](https://github.com/${data.githubUsername})\n\r` + 
        ` - [${data.email}](${data.email})` + br;
    
    const content = [
        description,
        tableOfContents,
        installInstr,
        usage,
        contribution,
        testInstr,
        questions
    ];

    fs.writeFile(fileName, title, function(err) {
        if (err) {
            console.log(err);
        }
    });

    for (let i = 0; i < content.length; i++) {
        fs.appendFile(fileName, content[i], function(err) {
            console.log(err);
        });
    }

}

function init() {
    inquirer.
        prompt(prompts).then(function (response) {  
            writeToFile("README.md", response);
        });
}

init();
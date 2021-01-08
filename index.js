const inquirer  = require('inquirer');
const fs        = require('fs');
const prompts   = require('./prompts.json');

// const arr = [1, 3, 5, -2];
// for (let element of arr) {
//     console.log(element);
// }

inquirer.
    prompt(prompts).then(function(response) {
        let projectTitle = response.projectTitle.toLowerCase();
        console.log(projectTitle);
    });


function buildReadMe() {
    fs.writeFile("README.md", '', function(err){
        if (err) {
            console.log(err);
        }
    });
}
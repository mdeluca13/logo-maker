const inquirer = require('inquirer');
const fs = require('fs');

// Questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo.',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'What colour would you like your text? Please enter a colour keyword or hexadecimal.',
        name: 'textColour',
    },
    {
        type: 'list',
        message: 'What shape would you like?',
        name: 'shape',
        choices: [
            'Circle', 
            'Triangle', 
            'Square'
        ],
    },
    {
        type: 'input',
        message: 'What colour would you like your logo shape? Please enter a colour keyword or hexadecimal.',
        name: 'shapeColour',
    },
  ];

function writeLogoFile(fileName, data) {
    fs.writeFile(fileName, createLogo(data), (err) =>
    err ? console.log(err) : console.log('Enjoy your Logo!')
    );
};

function createLogo(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${data.shape.toLowerCase()} cx="150" cy="100" r="80" fill="${data.shapeColour.toLowerCase()}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColour.toLowerCase()}">${data.characters}</text>
  
</svg>`
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
        writeLogoFile(`${data.characters}.svg`, data)
    });
}

init();
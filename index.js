// Requiring files needed for Logo Maker
const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require('./lib/square');

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
            'Triangle', 
            'Circle', 
            'Square'
        ],
    },
    {
        type: 'input',
        message: 'What colour would you like your logo shape? Please enter a colour keyword or hexadecimal.',
        name: 'shapeColour',
    },
];

// Creating Logo based on Triangle, Circle and Square Classes
function createLogo(data) {
    let shapeRender = '';
    let format = '';
    switch (data.shape) {
        case 'Triangle':
            const triangle = new Triangle();
            shapeRender = triangle.setColour(data.shapeColour);
            format = `<text x="150" y="140" font-size="40" text-anchor="middle" fill="${data.textColour.toLowerCase()}">${data.characters}</text>`;
            break;
        case 'Circle':
            const circle = new Circle();
            shapeRender = circle.setColour(data.shapeColour);
            format = `<text x="150" y="115" font-size="40" text-anchor="middle" fill="${data.textColour.toLowerCase()}">${data.characters}</text>`;
            break;
        case 'Square':
            let square = new Square();
            shapeRender = square.setColour(data.shapeColour);
            format = `<text x="100" y="110" font-size="40" text-anchor="middle" fill="${data.textColour.toLowerCase()}">${data.characters}</text>`;
            break;
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeRender}
    ${format}
</svg>`
}

// Writing Logo file based on input from prompted questions and the createLogo function
function writeLogoFile(fileName, data) {
    if (fileName.length > 7) {
        console.log("You entered too many characters for your logo, please enter 1 to 3 characters to be displayed on your logo");
    }
    else if (fileName.length < 5) {
        console.log("You have not entered enough characters for your logo, please enter 1 to 3 characters to be displayed on your logo");
    }
    else {
    fs.writeFile(fileName, createLogo(data), (err) =>
    err ? console.log(err) : console.log('Enjoy your Logo!')
    );
    };
};

// Calling the question prompts for user input and using that data to call writeLogoFunction
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
        writeLogoFile(`${data.characters}.svg`, data)
    });
}

// Initializing init function
init();
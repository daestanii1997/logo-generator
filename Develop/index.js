const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes')

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shapes',
            message:'Please choose a shape.'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be?'
        },
        {
            type: 'input',
            name: 'textInput',
            message: 'Enter up to three charaters'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be?'
        },

    ]) .then((answers) => {
        console.log(answers);
    })
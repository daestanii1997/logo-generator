const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Circle, Triangle, Square} = require('./Develop/shapes');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shapes',
            message:'Please choose a shape.',
            choices:['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be?'
        },
        {
            type: 'input',
            name: 'textInput',
            message: 'Enter up to three charaters',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be?'
        },

    ]) .then((answers) => {

        function shapeSelection(answers) {
            if(answers.shapes === 'Circle') {
        
                let shapeInput = new Circle (answers.shapeColor, answers.textInput, answers.textColor);
                return shapeInput.render();
        
            } else if (answers.shapes === 'Triangle') {
        
                let shapeInput = new Triangle (answers.shapeColor, answers.textInput, answers.textColor);
                return shapeInput.render();
        
            } else {
        
                let shapeInput = new Square (answers.shapeColor, answers.textInput, answers.textColor);
                return shapeInput.render();
            }
        };

    // function to create logo 
        function makeLogo(answers) {
            const newSvg = shapeSelection(answers);
        fs.writeFile('logo.svg', newSvg, () => console.log('Created new svg file!'))
        };

        makeLogo(answers);
    })
    .catch(err => {
        console.log(err)
    });
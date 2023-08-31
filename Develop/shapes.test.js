const {Shapes, Circle, Triangle, Square} = require('./shapes');

describe('Shapes', () => {

    describe('Triangle', () => {

        it('should set shape color as blue, text as Kai and text color as white', () => {
            const shape = new Triangle('blue', 'Kai', 'white');
            expect(shape.render()).toEqual(`
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
        <text x="100" y="150" font-size="50" text-anchor="middle" fill="white">Kai</text>
        </svg>
        `
            );
        })
        
    })

    describe('Circle', () => {
        it('should set shape color as blue, text as Kai and text color as white', () => {
            const shape = new Circle('blue', 'Kai', 'white');
            expect(shape.render()).toEqual(`
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="blue"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">Kai</text>
        </svg>
        `
            );
        })
        
    })

    describe('Square', () => {
        it('should set shape color as blue, text as Kai and text color as white', () => {
            const shape = new Square('blue', 'Kai', 'white');
            expect(shape.render()).toEqual(`
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" fill="blue"/>
        <text x="75" y="100" font-size="60" text-anchor="middle" fill="white">Kai</text>
        </svg>
        `
            );
        })
        
    })
})

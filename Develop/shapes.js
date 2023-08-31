class Shapes{
    constructor(shapeColor, textInput, textColor) {
        this.shapeColor = shapeColor;
        this.textInput = textInput;
        this.textColor = textColor;
    }
}

class Circle extends Shapes {
    constructor(shapeColor, textInput, textColor) {
        super(shapeColor, textInput, textColor);
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        </svg>
        `
    }
}

class Triangle extends Shapes {
    constructor(shapeColor, textInput, textColor) {
        super(shapeColor, textInput, textColor);
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        </svg>
        `
    }
}

class Square extends Shapes {
    constructor(shapeColor, textInput, textColor) {
        super(shapeColor, textInput, textColor);
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" fill="${this.shapeColor}"/>
        <text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        </svg>
        `
    }
}

module.exports = {Shapes, Circle, Triangle, Square};
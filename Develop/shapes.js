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
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        `
    }
}

class Triangle extends Shapes {
    constructor(shapeColor, textInput, textColor) {
        super(shapeColor, textInput, textColor);
    }
    render() {
        return `
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        `
    }
}

class Square extends Shapes {
    constructor(shapeColor, textInput, textColor) {
        super(shapeColor, textInput, textColor);
    }
    render() {
        return `
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>
        `
    }
}

module.exports = Shapes, Circle, Triangle, Square;
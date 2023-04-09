//  Creating Circle class to create the shape of the Logo
class Circle {
    constructor() { }
    setColour(shapeColour) {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColour}" />`;
    };
};

// Exporting Circle Class to be used in other files
module.exports = Circle;
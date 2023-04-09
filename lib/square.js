//  Creating Square class to create the shape of the Logo
class Square {
    constructor() { }
    setColour(shapeColour) {
        return `<rect width="200" height="200" fill="${shapeColour}" />`;
    };
};

// Exporting Square Class to be used in other files
module.exports = Square;
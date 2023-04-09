//  Creating Triangle class to create the shape of the Logo
class Triangle {
    constructor() { }
    setColour(shapeColour) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColour}" />`;
    };
};

// Exporting Triagle Class to be used in other files
module.exports = Triangle;
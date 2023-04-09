class Square {
    constructor() { }
    setColour(shapeColour) {
        return `<rect width="200" height="200" fill="${shapeColour}" />`;
    };
};

module.exports = Square;
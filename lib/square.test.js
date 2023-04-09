const Square = require('./square');

describe('Square', () => {
    describe('square', () => {
        it('should take the colour input and create a Square shaped logo with the input color as background colour', () => {
            const shape = new Square();
            expect(shape.setColour("blue")).toEqual('<rect width="200" height="200" fill="blue" />');
        });
    });
});
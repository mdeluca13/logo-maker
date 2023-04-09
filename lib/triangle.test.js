// Testing Triangle Class to ensure it renders properly
const Triangle = require('./triangle.js');

describe('Triangle', () => {
    describe('triangle', () => {
        it('should take the colour input and create a Triangle shaped logo with the input color as background colour', () => {
            const shape = new Triangle();
            expect(shape.setColour("blue")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});
// Testing Circle Class to ensure it renders properly
const Circle = require('./circle');

describe('Circle', () => {
    describe('circle', () => {
        it('should take the colour input and create a Circle shaped logo with the input color as background colour', () => {
            const shape = new Circle();
            expect(shape.setColour("blue")).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
    });
});
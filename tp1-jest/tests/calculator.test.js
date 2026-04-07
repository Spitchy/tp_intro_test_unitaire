const { add } = require("../src/calculator");
const { subtract } = require("../src/calculator");
const { multiply } = require("../src/calculator");
const { divide } = require("../src/calculator");

test.each([
  [1, 2, 3],
  [-1, -1, -2],
    [0, 0, 0],
    [1.5, 2.5, 4],
])('add(%i, %i) should return %i', (a, b, expected) => {
  expect(add(a, b)).toBe(expected);
});

test.each([
    [5, 3, 2], 
    [-1, -1, 0],
    [0, 0, 0],
    [2.5, 1.5, 1],
])('subtract(%i, %i) should return %i', (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected);
});

test.each([
    [2, 3, 6], 
    [-1, -1, 1],
    [0, 5, 0],
    [1.5, 2, 3],
])('multiply(%i, %i) should return %i', (a, b, expected) => {
    expect(multiply(a, b)).toBe(expected);
});

test.each([
    [6, 3, 2],
    [-1, -1, 1],
    [5, 0, 'error'],
    [3, 1.5, 2],
])('divide(%i, %i) should return %i', (a, b, expected) => {
    if (expected === 'error') {
        expect(() => divide(a, b)).toThrow('Division par zéro impossible');
    } else {
        expect(divide(a, b)).toBe(expected);
    }
});
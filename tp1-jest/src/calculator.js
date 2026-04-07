function add(a, b) {
 if (typeof a !== 'number' || typeof b !== 'number') {
 throw new TypeError('Les arguments doivent être des nombres');
 }
 return a + b;
}
function subtract(a, b) {
 if (typeof a !== 'number' || typeof b !== 'number') {
 throw new TypeError('Les arguments doivent être des nombres');
 }
 return a - b;
}
function multiply(a, b) { return a * b; }
function divide(a, b) {
 if (b === 0) throw new Error('Division par zéro impossible');
 return a / b;
}
module.exports = { add, subtract, multiply, divide };
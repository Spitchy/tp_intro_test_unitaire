// tests/greet.test.js
const { greet } = require('../src/greet');
describe('greet', () => {
 it('retourne un message en français par défaut', () => {
 // ARRANGE
 const name = 'Alice';
 // ACT
 const result = greet(name);
 // ASSERT
 expect(result).toBe('Bonjour, Alice !');
 });
 it('retourne un message en anglais', () => {
 expect(greet('Bob', 'en')).toBe('Hello, Bob!');
 });
 it('retourne un message en espagnol', () => {
    expect(greet('Carlos', 'es')).toBe('¡Hola, Carlos!');
 });
 it('utilise le fallback pour une langue inconnue', () => {
    expect(greet('Alice', 'de')).toBe('Hello, Alice!');
 });
 describe('cas invalides', () => {
 it('lève une erreur si le nom est vide', () => {
    expect(() => greet('')).toThrow('Le nom ne peut pas être vide');
 });
 it('lève une erreur si le nom ne contient que des espaces', () => {
    expect(() => greet(' ')).toThrow('Le nom ne peut pas être vide');
 });
 });
});

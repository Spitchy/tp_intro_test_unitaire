
const { Cart } = require('../tp1-jest/src/cart');
describe('Cart', () => {
 let cart;
    beforeEach(() => {
    cart = new Cart();
    });
    test('ajoute un article', () => {
    cart.addItem({ name: 'Apple', price: 1 });
    expect(cart.items).toEqual([{ name: 'Apple', price: 1, qty: 1 }]);
    });
    test('ajoute plusieurs fois le même article', () => {
    cart.addItem({ name: 'Apple', price: 1 });
    cart.addItem({ name: 'Apple', price: 1, qty: 2 });
    expect(cart.items).toEqual([{ name: 'Apple', price: 1, qty: 3 }]);
    });
    test('calcule le total', () => {
    cart.addItem({ name: 'Apple', price: 1, qty: 3 });
    cart.addItem({ name: 'Banana', price: 2, qty: 2 });
    expect(cart.total()).toBe(7);
    });
    test('calcule le nombre total darticles', () => {
    cart.addItem({ name: 'Apple', price: 1, qty: 3 });
    cart.addItem({ name: 'Banana', price: 2, qty: 2 });
    expect(cart.count()).toBe(5);
    });
    test('applique une remise', () => {
    cart.addItem({ name: 'Apple', price: 1, qty: 3 });
    cart.addItem({ name: 'Banana', price: 2, qty: 2 });
    cart.applyDiscount(10);
    expect(cart.total()).toBe(6.3);
    });
    test('supprime un article', () => {
    cart.addItem({ name: 'Apple', price: 1, qty: 3 });
    cart.addItem({ name: 'Banana', price: 2, qty: 2 });
    cart.removeItem('Apple');
    expect(cart.items).toEqual([{ name: 'Banana', price: 2, qty: 2 }]);
    });
    test('lève une erreur si on supprime un article inexistant', () => {
    expect(() => cart.removeItem('NonExistent')).toThrow("Article 'NonExistent' introuvable");
    });
    test('lève une erreur si on applique une remise invalide', () => {
    expect(() => cart.applyDiscount(-5)).toThrow('La remise doit être entre 0 et 100');
    expect(() => cart.applyDiscount(150)).toThrow('La remise doit être entre 0 et 100');
    });
    test('lève une erreur si le prix dun article est négatif', () => {
    expect(() => cart.addItem({ name: 'Invalid', price: -1 })).toThrow('Le prix doit être un nombre positif');
    });
    test('lève une erreur si le nom dun article est manquant', () => {
    expect(() => cart.addItem({ price: 1 })).toThrow('Le nom de larticle est requis');
    });
    test('lève une erreur si la remise est égale à 0 ou 100', () => {
    cart.addItem({ name: 'Apple', price: 1, qty: 3 });
    cart.applyDiscount(0);
    expect(cart.total()).toBe(3);
    cart.applyDiscount(100);
    expect(cart.total()).toBe(0);
    });
});
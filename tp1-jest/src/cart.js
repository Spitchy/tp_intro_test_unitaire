// src/cart.js
class Cart {
 constructor() {
 this.items = [];
 this.discount = 0; // pourcentage de remise (0–100)
 }
 /**
 * Ajoute un article au panier.
 * @param {{ name: string, price: number, qty?: number }} item
 */
 addItem(item) {
 if (!item.name || typeof item.name !== 'string') {
 throw new Error('Le nom de larticle est requis');
 }
 if (typeof item.price !== 'number' || item.price < 0) {
 throw new Error('Le prix doit être un nombre positif');
 }
 const qty = item.qty ?? 1;
 const existing = this.items.find(i => i.name === item.name);
 if (existing) {
 existing.qty += qty;
 } else {
 this.items.push({ name: item.name, price: item.price, qty });
 }
 }
 /** Supprime un article par son nom. */
 removeItem(name) {
 const index = this.items.findIndex(i => i.name === name);
 if (index === -1) throw new Error(`Article '${name}' introuvable`);
 this.items.splice(index, 1);
 }
 /** Applique un code promo. */
 applyDiscount(percent) {
 if (percent < 0 || percent > 100) {
 throw new Error('La remise doit être entre 0 et 100');
 }
 this.discount = percent;
 }
 /** Calcule le total (avec remise). */
 total() {
 const subtotal = this.items.reduce(
 (sum, item) => sum + item.price * item.qty, 0
 );
 return subtotal * (1 - this.discount / 100);
 }
 /** Nombre total d'articles (en tenant compte des quantités). */
 count() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
 }
}
module.exports = { Cart };

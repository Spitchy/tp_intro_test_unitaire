// src/greet.js
/**
* Génère un message de salutation.
* @param {string} name - Le prénom de la personne
* @param {string} [lang='fr'] - La langue ('fr', 'en', 'es')
* @returns {string} Le message de salutation
*/
function greet(name, lang = 'fr') {
 if (!name || name.trim() === '') {
 throw new Error('Le nom ne peut pas être vide');
 }
 const messages = {
 fr: `Bonjour, ${name} !`,
 en: `Hello, ${name}!`,
 es: `¡Hola, ${name}!`,
 };
 return messages[lang] ?? `Hello, ${name}!`;
}
module.exports = { greet };
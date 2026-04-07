// src/emailValidator.js
/**
* Valide une adresse email.
* Règles :
* - Doit contenir un @ entouré de caractères
* - Le domaine doit contenir au moins un point
* - Pas d'espaces autorisés
* - L'extension doit faire entre 2 et 6 caractères
* @param {string} email
* @returns {boolean}
*/
function isValidEmail(email) {
 if (typeof email !== 'string') return false;
 const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;
 return regex.test(email.trim());
}
/**
* Extrait le domaine d'une adresse email valide.
* @param {string} email
* @returns {string} Le domaine (ex: 'gmail.com')
* @throws {Error} si l'email est invalide
*/
function getDomain(email) {
 if (!isValidEmail(email)) {
 throw new Error(`Email invalide : ${email}`);
 }
 return email.split('@')[1];
}
module.exports = { isValidEmail, getDomain };
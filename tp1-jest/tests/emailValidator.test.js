const { isValidEmail, getDomain } = require('../src/emailValidator');

describe('isValidEmail', () => {
  describe('emails valides', () => {
    test.each([
      ['alice@gmail.com', true],
      ['alice.martin@company.co.uk', true],
      ['user+tag@domain.org', true],
      ['alice-no-at-sign', false],
      ['alice@', false],
      ['@nodomain.com', false],
      ['alice @gmail.com', false],
      ['alice@gmail.c', false],
      ['alice@gmail.toolongtest', false],
      ['null ou undefined', false]
    ])('%s → %s', (email, expected) => {
      expect(isValidEmail(email)).toBe(expected);
    });
  });
});

describe('getDomain', () => {
  // CAS VALIDES : On attend une chaîne de caractères (le domaine)
  describe('cas valides', () => {
    test.each([
      ['alice@gmail.com', 'gmail.com'],
      ['bob@company.co.uk', 'company.co.uk'],
    ])('%s → %s', (email, expected) => {
      expect(getDomain(email)).toBe(expected);
    });
  });

  // CAS INVALIDES : On dit à Jest d'attendre une ERREUR (.toThrow)
  describe('cas invalides', () => {
    test.each([
      ['invalid-email'],
      ['@invalid.com'],
    ])('devrait lancer une erreur pour %s', (email) => {
      // On emballe l'appel dans une fonction fléchée () => ...
      // pour que Jest puisse "attraper" l'erreur au lieu de crasher.
      expect(() => getDomain(email)).toThrow(`Email invalide : ${email}`);
    });
  });
});
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
 describe('emails invalides', () => {
 // TODO
 });
});

describe('getDomain', () => {
 test.each([
 ['alice@gmail.com', 'gmail.com'],
 ['bob@company.co.uk', 'company.co.uk'],
 ['invalid-email', 'domain.org'],
 ['@invalid.com', 'invalid.com'],
 ])('%s → %s', (email, expected) => {
 expect(getDomain(email)).toBe(expected);
 });
});
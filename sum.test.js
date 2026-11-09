const sum = require('./sum');

test('adds 1 + 2 e ígual a 3', () => {
  expect(sum(1, 2)).toBe(3); // se colocar expect(sum(1, 2)).toBe(4); o teste falha
});
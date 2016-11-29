test('adds 1 + 2 to equal 3', () => {
  const sum = require('../nikita');
  expect(sum(1, 2)).toBe(3);
});
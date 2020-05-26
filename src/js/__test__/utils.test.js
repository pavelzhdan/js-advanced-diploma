import calcTileType from '../utils';

test('return top-left', () => {
  const result = calcTileType(0, 8);

  expect(result).toBe('top-left');
});

test('return top-right', () => {
  const result = calcTileType(7, 8);

  expect(result).toBe('top-right');
});

test('return bottom-left', () => {
  const result = calcTileType(56, 8);

  expect(result).toBe('bottom-left');
});

test('return bottom-right', () => {
  const result = calcTileType(63, 8);

  expect(result).toBe('bottom-right');
});

test('return bottom', () => {
  const result = calcTileType(57, 8);

  expect(result).toBe('bottom');
});

test('return left', () => {
  const result = calcTileType(8, 8);

  expect(result).toBe('left');
});


test('return right', () => {
  const result = calcTileType(15, 8);

  expect(result).toBe('right');
});

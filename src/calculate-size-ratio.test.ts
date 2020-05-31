import { calculateSizeRatio } from './calculate-size-ratio';

it('returns 1 when values are equal', () => {
  expect(calculateSizeRatio([16, 'px'], [16, 'px'])).toBe(1);
  expect(calculateSizeRatio([12, 'pt'], [12, 'pt'])).toBe(1);
  expect(calculateSizeRatio([1, 'in'], [1, 'in'])).toBe(1);
});

it('returns ratio when values are inequal', () => {
  expect(calculateSizeRatio([10, 'px'], [15, 'px'])).toBe(1.5);
  expect(calculateSizeRatio([10, 'px'], [20, 'px'])).toBe(2);
  expect(calculateSizeRatio([50, 'pt'], [25, 'pt'])).toBe(0.5);
});

it('returns null when inputs are relative', () => {
  expect(calculateSizeRatio([1, 'em'], [16, 'px'])).toBeNull();
  expect(calculateSizeRatio([22, 'pt'], [1.5, 'rem'])).toBeNull();
});

it('returns zero when right size is zero', () => {
  expect(calculateSizeRatio([20, 'px'], [0, 'px'])).toBe(0);
});

it('returns null when left size is zero', () => {
  expect(calculateSizeRatio([0, 'px'], [20, 'px'])).toBeNull();
});

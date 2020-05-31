import { fontSizeIsRelative, fontSizeIsAbsolute } from './font-size';

describe('fontSizeIsRelative()', () => {
  test.each`
    fontSize         | relative
    ${['xx-small']}  | ${false}
    ${['x-small']}   | ${false}
    ${['small']}     | ${false}
    ${['medium']}    | ${false}
    ${['large']}     | ${false}
    ${['x-large']}   | ${false}
    ${['xx-large']}  | ${false}
    ${[12, 'px']}    | ${false}
    ${['smaller']}   | ${true}
    ${['larger']}    | ${true}
    ${[0.8, 'em']}   | ${true}
    ${[80, '%']}     | ${true}
  `('fontSizeIsRelative($fontSize) === $relative', ({ fontSize, relative }) => {
    expect(fontSizeIsRelative(fontSize)).toBe(relative);
  });
});

describe('fontSizeIsAbsolute()', () => {
  test.each`
    fontSize         | absolute
    ${['xx-small']}  | ${true}
    ${['x-small']}   | ${true}
    ${['small']}     | ${true}
    ${['medium']}    | ${true}
    ${['large']}     | ${true}
    ${['x-large']}   | ${true}
    ${['xx-large']}  | ${true}
    ${[12, 'px']}    | ${true}
    ${['smaller']}   | ${false}
    ${['larger']}    | ${false}
    ${[0.8, 'em']}   | ${false}
    ${[80, '%']}     | ${false}
  `('fontSizeIsAbsolute($fontSize) === $absolute', ({ fontSize, absolute }) => {
    expect(fontSizeIsAbsolute(fontSize)).toBe(absolute);
  });
});

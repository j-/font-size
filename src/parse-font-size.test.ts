import { parseFontSize } from './parse-font-size';

it('parses length values', () => {
  expect(parseFontSize('1px')).toEqual([1, 'px']);
  expect(parseFontSize('1em')).toEqual([1, 'em']);
  expect(parseFontSize('1.5em')).toEqual([1.5, 'em']);
  expect(parseFontSize('10mm')).toEqual([10, 'mm']);
  expect(parseFontSize('1e2pt')).toEqual([100, 'pt']);
  expect(parseFontSize('+1E-2em')).toEqual([0.01, 'em']);
});

it('parses keyword values', () => {
  expect(parseFontSize('initial')).toEqual(['initial']);
  expect(parseFontSize('inherit')).toEqual(['inherit']);
  expect(parseFontSize('unset')).toEqual(['unset']);
  expect(parseFontSize('large')).toEqual(['large']);
  expect(parseFontSize('0')).toEqual(['0']);
});

it('trims input', () => {
  expect(parseFontSize(' 1px')).toEqual([1, 'px']);
  expect(parseFontSize('1em ')).toEqual([1, 'em']);
  expect(parseFontSize(' 1.5em ')).toEqual([1.5, 'em']);
  expect(parseFontSize('\tsmall\r\n')).toEqual(['small']);
});

it('does not parse invalid input', () => {
  expect(parseFontSize('')).toBeNull();
  expect(parseFontSize('1')).toBeNull();
  expect(parseFontSize('null')).toBeNull();
  expect(parseFontSize('foobar')).toBeNull();
  expect(parseFontSize('1.1.1em')).toBeNull();
  expect(parseFontSize('-10em')).toBeNull();
});

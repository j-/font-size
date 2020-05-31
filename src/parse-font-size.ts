import { FontSizeValue } from './font-size';

/**
 * Matches:
 * 1. A number and units pair, or
 * 2. A keyword
 */
export const FONT_SIZE_EXP = /^(\+?(?:\d+|\d*\.\d+)(?:[eE][+-]?\d+)?)(em|rem|%|px|mm|Q|cm|in|pt|pc)$|^(larger|smaller|xx-small|x-small|small|medium|large|x-large|xx-large|inherit|initial|unset|0)$/;

/**
 * Parse an input string, get a font-size value (or null)
 */
export const parseFontSize = (input: string): null | FontSizeValue => {
  const match = input.trim().match(FONT_SIZE_EXP);
  if (!match) return null;
  const value = match[1];
  const units = match[2];
  const keyword = match[3];
  if (keyword) {
    // Keyword
    return [keyword];
  } else {
    // Length (value and units)
    return [Number(value), units];
  }
};

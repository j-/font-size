import { FontSizeLength, isFontSizeLength } from './types';
import { unitIsAbsolute, convert } from './convert';
import { parseFontSize } from './parse-font-size';

export const calculateSizeRatio = ([leftValue, leftUnit]: FontSizeLength, [rightValue, rightUnit]: FontSizeLength) => {
  // Left size units must be absolute
  if (!unitIsAbsolute(leftUnit)) return null;
  // Right size units must be absolute
  if (!unitIsAbsolute(rightUnit)) return null;
  // Left size value cannot be zero
  if (leftValue === 0) return null;
  // Result is always zero if right size is zero
  if (rightValue === 0) return 0;
  // Convert values to the same unit and return ratio
  return convert(rightUnit, leftUnit, rightValue) / leftValue;
}

export const calculateTargetRatio = (baseSize: number, input: string) => {
  // Get keyword, length or null
  const parsedInput = parseFontSize(input);
  // Input must not be null
  if (parsedInput === null) return null;
  // Input must be a length
  if (!isFontSizeLength(parsedInput)) return null;
  // Input must be absolute
  if (!unitIsAbsolute(parsedInput[1])) return null;
  // Calculate actual ratio
  return calculateSizeRatio([baseSize, 'px'], parsedInput)
};

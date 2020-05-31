import calculateLength from './calculate-length';
import calculateKeyword from './calculate-keyword';
import { CalculateFontSize, FontSizeValue, isFontSizeKeyword, isFontSizeLength } from './font-size';

export const calculateFontSize: CalculateFontSize<FontSizeValue> = (defaultFontSize, rootFontSize, parentFontSize, value) => {
  if (isFontSizeKeyword(value)) {
    return calculateKeyword(defaultFontSize, rootFontSize, parentFontSize, value);
  }
  if (isFontSizeLength(value)) {
    return calculateLength(defaultFontSize, rootFontSize, parentFontSize, value);
  }
  throw new Error('Expected item to be of length 1 or 2');
};

export const calculateRootFontSize = (defaultFontSize: number, rootItem: FontSizeValue) => (
  calculateFontSize(defaultFontSize, defaultFontSize, defaultFontSize, rootItem)
);

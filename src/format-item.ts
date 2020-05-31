import { FontSizeValue, isFontSizeKeyword, isFontSizeLength } from './types';

export const formatItem = (item: FontSizeValue | null) => {
  if (!item) return '';
  if (isFontSizeKeyword(item)) return item[0];
  if (isFontSizeLength(item)) return `${item[0]}${item[1]}`;
  throw new Error('Could not format item');
}

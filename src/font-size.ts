import { unitIsRelative, unitIsAbsolute } from './units';
import { valueIsRelative, valueIsAbsolute } from './values';

export type FontSizeValue = FontSizeKeyword | FontSizeLength

export interface FontSizeKeyword extends Array<string> {
  length: 1;
  0: string;
}

export interface FontSizeLength extends Array<number | string> {
  length: 2;
  0: number;
  1: string;
}

export const isFontSizeKeyword = (item: FontSizeValue): item is FontSizeKeyword => (
  item.length === 1
);

export const isFontSizeLength = (item: FontSizeValue): item is FontSizeLength => (
  item.length === 2
);

export interface CalculateFontSize<T extends FontSizeValue> {
  (defaultFontSize: number, rootFontSize: number, parentFontSize: number, value: T): number;
}

export const fontSizeIsRelative = (fontSize: FontSizeValue) => (
  isFontSizeKeyword(fontSize) && valueIsRelative(fontSize[0]) ||
  isFontSizeLength(fontSize) && unitIsRelative(fontSize[1])
);

export const fontSizeIsAbsolute = (fontSize: FontSizeValue) => (
  isFontSizeKeyword(fontSize) && valueIsAbsolute(fontSize[0]) ||
  isFontSizeLength(fontSize) && unitIsAbsolute(fontSize[1])
);

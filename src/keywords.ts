export enum Keyword {
  LARGER   = 'larger',   // 1.2
  SMALLER  = 'smaller',  // 1 / 1.2
  XX_SMALL = 'xx-small', // 9px
  X_SMALL  = 'x-small',  // 10px
  SMALL    = 'small',    // 13px
  MEDIUM   = 'medium',   // 16px
  LARGE    = 'large',    // 18px
  X_LARGE  = 'x-large',  // 24px
  XX_LARGE = 'xx-large', // 32px
  INHERIT  = 'inherit',  // 100%
  INITIAL  = 'initial',  // 16px
  UNSET    = 'unset',    // 100%
  ZERO     = '0',
}

export type RelativeKeyword =
  Keyword.LARGER |
  Keyword.SMALLER

export const keywordIsRelative = (value: string): value is RelativeKeyword => (
  value === Keyword.LARGER ||
  value === Keyword.SMALLER
);

export type AbsoluteKeyword =
  Keyword.LARGER |
  Keyword.SMALLER

export const keywordIsAbsolute = (value: string): value is AbsoluteKeyword => (
  value === Keyword.XX_SMALL ||
  value === Keyword.X_SMALL ||
  value === Keyword.SMALL ||
  value === Keyword.MEDIUM ||
  value === Keyword.LARGE ||
  value === Keyword.X_LARGE ||
  value === Keyword.XX_LARGE
);

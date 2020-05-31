export enum Value {
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

export type RelativeValue =
  Value.LARGER |
  Value.SMALLER

export const valueIsRelative = (value: string): value is RelativeValue => (
  value === Value.LARGER ||
  value === Value.SMALLER
);

export type AbsoluteValue =
  Value.LARGER |
  Value.SMALLER

export const valueIsAbsolute = (value: string): value is AbsoluteValue => (
  value === Value.XX_SMALL ||
  value === Value.X_SMALL ||
  value === Value.SMALL ||
  value === Value.MEDIUM ||
  value === Value.LARGE ||
  value === Value.X_LARGE ||
  value === Value.XX_LARGE
);

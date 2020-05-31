export enum Unit {
  PX = 'px',
  MM = 'mm',
  Q  = 'Q',
  CM = 'cm',
  IN = 'in',
  PT = 'pt',
  PC = 'pc',
  EM = 'em',
  REM = 'rem',
  PERCENT = '%',
}

export type AbsoluteUnit =
  Unit.PX |
  Unit.MM |
  Unit.Q |
  Unit.CM |
  Unit.IN |
  Unit.PT |
  Unit.PC

export const unitIsAbsolute = (unit: string): unit is AbsoluteUnit => (
  unit === Unit.PX ||
  unit === Unit.MM ||
  unit === Unit.Q ||
  unit === Unit.CM ||
  unit === Unit.IN ||
  unit === Unit.PT ||
  unit === Unit.PC
);

export type RelativeUnit =
  Unit.EM |
  Unit.REM |
  Unit.PERCENT

export const unitIsRelative = (unit: string): unit is RelativeUnit => (
  unit === Unit.EM ||
  unit === Unit.REM ||
  unit === Unit.PERCENT
);

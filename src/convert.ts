/*

These lengths are all equal:

* 4800px
* 1270mm
* 5080Q
* 127cm (prime number)
* 50in
* 3600pt
* 300pc

*/

import { Unit } from './units';

export const BASE_PX = 4800;
export const BASE_MM = 1270;
export const BASE_Q  = 5080;
export const BASE_CM = 127;
export const BASE_IN = 50;
export const BASE_PT = 3600;
export const BASE_PC = 300;

const convertTo = (toUnit: Unit, value: number) => {
  switch (toUnit) {
    case Unit.PX: return value * BASE_PX;
    case Unit.MM: return value * BASE_MM;
    case Unit.Q:  return value * BASE_Q;
    case Unit.CM: return value * BASE_CM;
    case Unit.IN: return value * BASE_IN;
    case Unit.PT: return value * BASE_PT;
    case Unit.PC: return value * BASE_PC;
    default: throw new Error(`Did not recognise unit "${toUnit}"`);
  }
};

const convertFrom = (fromUnit: Unit, value: number) => {
  switch (fromUnit) {
    case Unit.PX: return value / BASE_PX;
    case Unit.MM: return value / BASE_MM;
    case Unit.Q:  return value / BASE_Q;
    case Unit.CM: return value / BASE_CM;
    case Unit.IN: return value / BASE_IN;
    case Unit.PT: return value / BASE_PT;
    case Unit.PC: return value / BASE_PC;
    default: throw new Error(`Did not recognise unit "${fromUnit}"`);
  }
};

export const convert = (fromUnit: Unit, toUnit: Unit, value: number) => (
  convertFrom(fromUnit, convertTo(toUnit, value))
);

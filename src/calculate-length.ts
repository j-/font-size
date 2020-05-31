import { CalculateFontSize, FontSizeLength } from './types';
import { Unit, convert } from './convert';

import {
  UNIT_EM,
  UNIT_REM,
  UNIT_PERCENT,
  UNIT_PX,
  UNIT_MM,
  UNIT_Q,
  UNIT_CM,
  UNIT_IN,
  UNIT_PT,
  UNIT_PC,
} from './units';

const calculateLength: CalculateFontSize<FontSizeLength> = (_defaultFontSize, rootFontSize, parentFontSize, [value, units]) => {
  switch (units) {
    // Relative units
    case UNIT_EM:      return parentFontSize * value;
    case UNIT_REM:     return rootFontSize * value;
    case UNIT_PERCENT: return parentFontSize * value / 100;
    // Absolute units
    case UNIT_PX: return convert(Unit.PX, Unit.PX, value);
    case UNIT_MM: return convert(Unit.MM, Unit.PX, value);
    case UNIT_Q:  return convert(Unit.Q,  Unit.PX, value);
    case UNIT_CM: return convert(Unit.CM, Unit.PX, value);
    case UNIT_IN: return convert(Unit.IN, Unit.PX, value);
    case UNIT_PT: return convert(Unit.PT, Unit.PX, value);
    case UNIT_PC: return convert(Unit.PC, Unit.PX, value);
    // Unknown units
    default: throw new Error(`Did not recognise unit "${units}"`);
  }
};

export default calculateLength;

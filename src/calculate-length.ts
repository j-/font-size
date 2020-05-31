import { CalculateFontSize, FontSizeLength } from './font-size';
import { Unit } from './units';
import { convert } from './convert';

const calculateLength: CalculateFontSize<FontSizeLength> = (_defaultFontSize, rootFontSize, parentFontSize, [value, units]) => {
  switch (units) {
    // Relative units
    case Unit.EM:      return parentFontSize * value;
    case Unit.REM:     return rootFontSize * value;
    case Unit.PERCENT: return parentFontSize * value / 100;
    // Absolute units
    case Unit.PX: return convert(Unit.PX, Unit.PX, value);
    case Unit.MM: return convert(Unit.MM, Unit.PX, value);
    case Unit.Q:  return convert(Unit.Q,  Unit.PX, value);
    case Unit.CM: return convert(Unit.CM, Unit.PX, value);
    case Unit.IN: return convert(Unit.IN, Unit.PX, value);
    case Unit.PT: return convert(Unit.PT, Unit.PX, value);
    case Unit.PC: return convert(Unit.PC, Unit.PX, value);
    // Unknown units
    default: throw new Error(`Did not recognise unit "${units}"`);
  }
};

export default calculateLength;

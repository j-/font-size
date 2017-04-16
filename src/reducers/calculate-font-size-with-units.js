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

const PX_FROM_PX = 1;
const PX_FROM_MM = 96 / 25.4;
const PX_FROM_Q  = 96 / 101.6;
const PX_FROM_CM = 96 / 2.54;
const PX_FROM_IN = 96;
const PX_FROM_PT = 4 / 3;
const PX_FROM_PC = 16;

export default (defaultFontSize, rootFontSize, parentFontSize, [value, units]) => {
	switch (units) {
		// Relative units
		case UNIT_EM: return parentFontSize * value;
		case UNIT_REM: return rootFontSize * value;
		case UNIT_PERCENT: return parentFontSize * (value / 100);
		// Absolute units
		case UNIT_PX: return value * PX_FROM_PX;
		case UNIT_MM: return value * PX_FROM_MM;
		case UNIT_Q:  return value * PX_FROM_Q;
		case UNIT_CM: return value * PX_FROM_CM;
		case UNIT_IN: return value * PX_FROM_IN;
		case UNIT_PT: return value * PX_FROM_PT;
		case UNIT_PC: return value * PX_FROM_PC;
		// Unknown units
		default: throw new Error(`Did not recognise unit "${units}"`);
	}
};

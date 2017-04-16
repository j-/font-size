import {
	VALUE_LARGER,
	VALUE_SMALLER,
	VALUE_XX_SMALL,
	VALUE_X_SMALL,
	VALUE_SMALL,
	VALUE_MEDIUM,
	VALUE_LARGE,
	VALUE_X_LARGE,
	VALUE_XX_LARGE,
	VALUE_INHERIT,
	VALUE_INITIAL,
	VALUE_UNSET,
	VALUE_ZERO,
} from './values';

export default (defaultFontSize, rootFontSize, parentFontSize, [value]) => {
	switch (value) {
		// Relative values
		case VALUE_LARGER: return 1.2 * parentFontSize;
		case VALUE_SMALLER: return parentFontSize / 1.2;
		// Absolute values
		case VALUE_XX_SMALL: return 9;
		case VALUE_X_SMALL: return 10;
		case VALUE_SMALL: return 13;
		case VALUE_MEDIUM: return 16;
		case VALUE_LARGE: return 18;
		case VALUE_X_LARGE: return 24;
		case VALUE_XX_LARGE: return 32;
		// Other values
		case VALUE_INHERIT: return parentFontSize;
		case VALUE_INITIAL: return defaultFontSize;
		case VALUE_UNSET: return parentFontSize;
		case VALUE_ZERO: return 0;
		// Unknown values
		default: throw new Error(`Did not recognise value "${value}"`);
	}
};

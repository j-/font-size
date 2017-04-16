// 1: Optional numeric group (including minus and decimal)
// 2: Optional word group (including hyphen and percent)
const valueUnitsExp = /^([\d\.\-]+)?([\w\-%]+)$/;

/**
 * Basic left/right string trim
 * @param {string} value
 */
const trim = (value) => (
	value.replace(/^\s+|\s+$/g, '')
);

/**
 * Parse an input string, get a font-size value or value/units pair
 * @param {string} input
 * @returns {[number, string]|[string]} Value or value/units pair
 */
export const parseItem = (input) => {
	const match = trim(input).match(valueUnitsExp);
	if (!match) {
		return null;
	}
	const numeric = match[1];
	const word = match[2];
	if (numeric) {
		// Value and units
		return [Number(numeric), word];
	} else {
		// Value
		return [word];
	}
};

import calculateWithUnits from './calculate-font-size-with-units';
import calculateWithoutUnits from './calculate-font-size-without-units';

export const calculateFontSize = (defaultFontSize, rootFontSize, parentFontSize, item) => {
	const length = item.length;
	if (length === 1) {
		return calculateWithoutUnits(defaultFontSize, rootFontSize, parentFontSize, item);
	} else if (length === 2) {
		return calculateWithUnits(defaultFontSize, rootFontSize, parentFontSize, item);
	} else {
		throw new Error(`Expected item to be of length 1 or 2, got ${length}`);
	}
};

export const calculateRootFontSize = (defaultFontSize, rootItem) => (
	calculateFontSize(defaultFontSize, defaultFontSize, defaultFontSize, rootItem)
);

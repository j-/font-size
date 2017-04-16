import { combineReducers } from 'redux';
import { calculateFontSize, calculateRootFontSize } from './calculate-font-size';

import defaultSize, * as defaultSizeModule from './reducer-default-size';
import rootSize, * as rootSizeModule from './reducer-root-size';
import stack, * as stackModule from './reducer-stack';

export default combineReducers({
	defaultSize,
	rootSize,
	stack,
});

export const getDefaultFontSize = (state) => (
	defaultSizeModule.getDefaultFontSize(state.defaultSize)
);

export const getRootItem = (state) => (
	rootSizeModule.getRootItem(state.rootSize)
);

export const getStackItems = (state) => (
	stackModule.getItems(state.stack)
);

export const getFinalFontSize = (state) => {
	const defaultFontSize = getDefaultFontSize(state);
	const rootItem = getRootItem(state);
	const rootFontSize = calculateRootFontSize(defaultFontSize, rootItem);
	const stack = getStackItems(state);
	return stack.reduce((parentFontSize, item) => (
		calculateFontSize(defaultFontSize, rootFontSize, parentFontSize, item)
	), rootFontSize);
};

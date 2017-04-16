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

export const formatItem = (item) => (
	(item || []).join('')
);

export const getDefaultFontSize = (state) => (
	defaultSizeModule.getDefaultFontSize(state.defaultSize)
);

export const getRootItem = (state) => (
	rootSizeModule.getRootItem(state.rootSize)
);

export const getStackItems = (state) => (
	stackModule.getItems(state.stack)
);

export const getStackLength = (state) => (
	stackModule.countItems(state.stack)
);

export const getItemByIndex = (state, index) => (
	stackModule.getItemByIndex(state.stack, index)
);

export const getFinalFontSize = (state) => {
	const defaultFontSize = getDefaultFontSize(state);
	const rootItem = getRootItem(state);
	const stack = getStackItems(state);
	let rootFontSize;
	try {
		rootFontSize = calculateRootFontSize(defaultFontSize, rootItem);
	} catch (err) {
		rootFontSize = defaultFontSize;
	}
	return stack.reduce((parentFontSize, item) => {
		try {
			return calculateFontSize(defaultFontSize, rootFontSize, parentFontSize, item);
		} catch (err) {
			return parentFontSize;
		}
	}, rootFontSize);
};

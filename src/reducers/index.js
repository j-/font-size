import { combineReducers } from 'redux';
import defaultSize, * as defaultSizeModule from './reducer-default-size';
import stack, * as stackModule from './reducer-stack';

export default combineReducers({
	defaultSize,
	stack,
});

export const getDefaultFontSize = (state) => (
	defaultSizeModule.getDefaultFontSize(state.defaultSize)
);

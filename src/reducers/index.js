import { combineReducers } from 'redux';
import defaultSize, * as defaultSizeModule from './reducer-default-size';

export default combineReducers({
	defaultSize,
});

export const getDefaultFontSize = (state) => (
	defaultSizeModule.getDefaultFontSize(state.defaultSize)
);

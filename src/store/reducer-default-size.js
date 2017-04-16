import {
	SET_DEFAULT_SIZE,
} from './types';

const DEFAULT_STATE = {
	defaultFontSizePx: 16,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_DEFAULT_SIZE:
			return {
				...state,
				defaultFontSizePx: action.data.size,
			};
		default:
			return state;
	}
};

export const getDefaultFontSize = (state) => state.defaultFontSizePx;

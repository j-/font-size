const DEFAULT_STATE = {
	defaultFontSizePx: 16,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const getDefaultFontSize = (state) => state.defaultFontSizePx;

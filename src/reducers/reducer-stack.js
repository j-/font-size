const DEFAULT_STATE = {
	items: [],
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const getItems = (state) => state.items;

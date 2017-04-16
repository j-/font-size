import {
	UNIT_PERCENT,
} from './units';

const DEFAULT_STATE = {
	item: [100, UNIT_PERCENT],
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const getRootItem = (state) => state.item;

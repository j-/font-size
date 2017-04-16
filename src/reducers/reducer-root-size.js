import {
	SET_ROOT_ITEM,
} from './types';

import {
	UNIT_PERCENT,
} from '../utils/units';

const DEFAULT_STATE = {
	item: [100, UNIT_PERCENT],
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_ROOT_ITEM:
			return {
				...state,
				item: action.data.item,
			};
		default:
			return state;
	}
};

export const getRootItem = (state) => state.item;

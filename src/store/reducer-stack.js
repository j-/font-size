import {
	SET_ITEM,
	REMOVE_ITEM,
} from './types';

const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_ITEM: {
			const { item, index } = action.data;
			const result = [...state];
			result[index] = item;
			return result;
		}
		case REMOVE_ITEM: {
			const { index } = action.data;
			const result = [...state];
			result.splice(index, 1);
			return result;
		}
		default:
			return state;
	}
};

export const getItems = (state) => state;

export const getItemByIndex = (state, index) => (
	getItems(state)[index] || null
);

export const countItems = (state) => (
	getItems(state).length
);
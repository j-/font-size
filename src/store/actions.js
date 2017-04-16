import {
	SET_DEFAULT_SIZE,
	SET_ROOT_ITEM,
	SET_ITEM,
	REMOVE_ITEM,
} from './types';

import { parseItem } from '../utils/parser';

export const setDefaultSize = (size) => ({
	type: SET_DEFAULT_SIZE,
	data: {
		size,
	},
});

export const setRootItem = (value) => ({
	type: SET_ROOT_ITEM,
	data: {
		item: parseItem(value),
	},
});

export const setItemByIndex = (value, index) => ({
	type: SET_ITEM,
	data: {
		item: parseItem(value),
		index,
	},
});

export const removeItemByIndex = (index) => ({
	type: REMOVE_ITEM,
	data: {
		index,
	},
});

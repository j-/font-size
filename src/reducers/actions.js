import {
	SET_DEFAULT_SIZE,
	SET_ROOT_ITEM,
} from './types';

import { parseItem } from './parser';

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

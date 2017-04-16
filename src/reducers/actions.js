import {
	SET_DEFAULT_SIZE,
} from './types';

export const setDefaultSize = (size) => ({
	type: SET_DEFAULT_SIZE,
	data: {
		size,
	},
});

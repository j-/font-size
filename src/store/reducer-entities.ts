import { Reducer } from 'redux';
import { ItemValue } from './types';

import {
  isActionReset,
  isActionAppend,
  isActionInsert,
  isActionSet,
} from './actions';

export interface ReducerState {
  [id: string]: ItemValue;
}

export const DEFAULT_STATE: ReducerState = {
  'root': '100%',
};

export const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionReset(action)) {
    return DEFAULT_STATE;
  }

  if (isActionAppend(action) || isActionInsert(action) || isActionSet(action)) {
    const { id, value } = action.data;
    return {
      ...state,
      [id]: value,
    };
  }

  return state;
};

export default reducer;

export const getValueById = (state: ReducerState, id: string) => state[id];

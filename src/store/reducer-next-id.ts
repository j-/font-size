import { Reducer } from 'redux';

import {
  isActionAppend,
  isActionInsert,
} from './actions';

export interface ReducerState {
  actionCount: number;
}

export const DEFAULT_STATE: ReducerState = {
  actionCount: 0,
};

export const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionAppend(action) || isActionInsert(action)) {
    return {
      ...state,
      actionCount: state.actionCount + 1,
    };
  }

  return state;
};

export default reducer;

export const getNextId = (state: ReducerState) => String(state.actionCount);

import { Reducer } from 'redux';
import { isActionSetFocus, isActionReset, isActionRemove, isActionSwap } from './actions';

export interface ReducerState {
  index: number | null;
}

export const DEFAULT_STATE: ReducerState = {
  index: 1,
};

export const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionSetFocus(action)) {
    return {
      ...state,
      index: action.data.index,
    };
  }

  if (isActionRemove(action)) {
    if (state.index !== null && action.data.index < state.index) {
      return {
        ...state,
        index: state.index - 1,
      };
    }
    return state;
  }

  if (isActionSwap(action)) {
    return {
      ...state,
      index: null,
    };
  }

  if (isActionReset(action)) {
    return DEFAULT_STATE;
  }

  return state;
};

export default reducer;

export const getFocusIndex = (state: ReducerState) => (
  state.index
);

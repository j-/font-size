import { Reducer } from 'redux';
import { isActionSetDefaultSize, ActionSetDefaultSize } from './actions';

export interface ReducerState {
  defaultFontSizePx: number;
}

export const DEFAULT_STATE: ReducerState = {
  defaultFontSizePx: 16,
};

export const reducer: Reducer<ReducerState, ActionSetDefaultSize> = (state = DEFAULT_STATE, action) => {
  if (isActionSetDefaultSize(action)) {
    return {
      ...state,
      defaultFontSizePx: action.data.sizePx,
    };
  }

  return state;
};

export default reducer;

export const getDefaultFontSize = (state: ReducerState) => state.defaultFontSizePx;

import { Reducer } from 'redux';

import {
  isActionReset,
  isActionAppend,
  isActionInsert,
  isActionRemove,
  isActionSwap,
} from './actions';

export interface ReducerState extends Array<string> {}

export const DEFAULT_STATE: ReducerState = [
  'root',
];

export const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionReset(action)) {
    return DEFAULT_STATE;
  }

  if (isActionAppend(action)) {
    const { id } = action.data;
    return [
      ...state,
      id,
    ];
  }

  if (isActionInsert(action)) {
    const { index, id } = action.data;
    return [
      ...state.slice(0, index),
      id,
      ...state.slice(index),
    ];
  }

  if (isActionRemove(action)) {
    const { index } = action.data;
    if (
      // Index cannot be out of bounds
      index < 1 ||
      index >= state.length
    ) return state;
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ];
  }

  if (isActionSwap(action)) {
    const { left, right } = action.data;
    if (
      // Cannot swap if there is nothing to swap with
      state.length === 1 ||
      // Left index cannot be out of bounds
      left < 0 || left >= state.length ||
      // Right index cannot be out of bounds
      right < 0 || right >= state.length ||
      // Cannot swap an item with itself
      left === right
    ) return state;
    const items = [...state];
    [items[left], items[right]] = [items[right], items[left]];
    return items;
  }

  return state; 
};

export default reducer;

export const getAllIds = (state: ReducerState) => state;

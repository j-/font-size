import { ThunkAction } from 'redux-thunk';
import { RootReducerState, isIdInStack } from '.';
import { set, append, ActionSet, ActionAppend } from './actions';

export type ActionUpdateValue = ThunkAction<void, RootReducerState, void, ActionAppend | ActionSet>

export const updateValue = (id: string, value: string): ActionUpdateValue => (dispatch, getState) => {
  const state = getState();
  if (isIdInStack(state, id)) {
    dispatch<ActionSet>(set(id, value));
  } else {
    dispatch<ActionAppend>(append(id, value));
  }
};

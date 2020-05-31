import { ThunkAction } from 'redux-thunk';
import { RootReducerState, getFocusIndex, canMoveFocusUp, canMoveFocusDown } from '.';
import { ActionSetFocus, setFocus } from './actions';

export type ActionMoveFocusUp = ThunkAction<void, RootReducerState, void, ActionSetFocus>

export const moveFocusUp = (): ActionMoveFocusUp => (dispatch, getState) => {
  const state = getState();
  const focusIndex = getFocusIndex(state);
  if (focusIndex === null || !canMoveFocusUp(state)) return;
  dispatch<ActionSetFocus>(setFocus(focusIndex - 1));
};

export type ActionMoveFocusDown = ThunkAction<void, RootReducerState, void, ActionSetFocus>

export const moveFocusDown = (): ActionMoveFocusDown => (dispatch, getState) => {
  const state = getState();
  const focusIndex = getFocusIndex(state);
  if (focusIndex === null || !canMoveFocusDown(state)) return;
  dispatch<ActionSetFocus>(setFocus(focusIndex + 1));
};

export type ActionUpdateFocus = ThunkAction<void, RootReducerState, void, ActionSetFocus>

export const updateFocus = (index: number): ActionUpdateFocus => (dispatch, getState) => {
  const state = getState();
  const focusIndex = getFocusIndex(state);
  if (index === focusIndex) return;
  dispatch<ActionSetFocus>(setFocus(index));
};

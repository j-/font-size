import { combineReducers } from 'redux';
import * as defaultSize from './reducer-default-size';
import * as entities from './reducer-entities';
import * as focus from './reducer-focus';
import * as nextId from './reducer-next-id';
import * as stack from './reducer-stack';

export interface RootReducerState {
  defaultSize: defaultSize.ReducerState;
  entities: entities.ReducerState;
  focus: focus.ReducerState;
  nextId: nextId.ReducerState;
  stack: stack.ReducerState;
}

export const reducer = combineReducers<RootReducerState>({
  defaultSize: defaultSize.reducer,
  entities: entities.reducer,
  focus: focus.reducer,
  nextId: nextId.reducer,
  stack: stack.reducer,
});

export default reducer;

export const getDefaultFontSize = (state: RootReducerState) => (
  defaultSize.getDefaultFontSize(state.defaultSize)
);

export const getValueById = (state: RootReducerState, id: string) => (
  entities.getValueById(state.entities, id)
);

export const getAllIds = (state: RootReducerState) => (
  stack.getAllIds(state.stack)
);

export const getStackCount = (state: RootReducerState) => (
  getAllIds(state).length
);

export const getAllValues = (state: RootReducerState) => (
  getAllIds(state)
    .map((id) => getValueById(state, id))
);

export const getNextId = (state: RootReducerState) => (
  nextId.getNextId(state.nextId)
);

export const isIdRoot = (_state: RootReducerState, id: string) => (
  id === 'root'
);

export const isIdNext = (state: RootReducerState, id: string) => (
  id === getNextId(state)
);

export const isIdInStack = (state: RootReducerState, id: string) => (
  getAllIds(state).indexOf(id) > -1
);

export const getAllIdsAndNext = (state: RootReducerState) => (
  [...getAllIds(state), getNextId(state)]
);

export const canRemove = (_state: RootReducerState, index: number) => (
  index > 0
);

export const canMoveUp = (_state: RootReducerState, index: number) => (
  index > 1
);

export const canMoveDown = (state: RootReducerState, index: number) => (
  index < getAllIds(state).length - 1 && index !== 0
);

export const getFocusIndex = (state: RootReducerState) => (
  focus.getFocusIndex(state.focus)
);

export const canMoveFocusUp = (state: RootReducerState) => {
  const focusIndex = getFocusIndex(state);
  if (focusIndex === null) return true;
  return focusIndex >= 1
};

export const canMoveFocusDown = (state: RootReducerState) => {
  const focusIndex = getFocusIndex(state);
  if (focusIndex === null) return true;
  return focusIndex <= getStackCount(state) - 1
};

import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';
import { RootReducerState } from '.';

export const useSelector: TypedUseSelectorHook<RootReducerState> = reduxUseSelector;

import { Action } from 'redux';
import { ItemValue } from './types';

/* Reset action */

export const ACTION_RESET = 'RESET';

export interface ActionReset extends Action<typeof ACTION_RESET> {}

export const isActionReset = (action: Action): action is ActionReset => (
  action.type === ACTION_RESET
);

export const reset = (): ActionReset => ({
  type: ACTION_RESET,
});

/* Append action */

export const ACTION_APPEND = 'APPEND';

export interface ActionAppend extends Action<typeof ACTION_APPEND> {
  data: {
    id: string;
    value: ItemValue;
  };
}

export const isActionAppend = (action: Action): action is ActionAppend => (
  action.type === ACTION_APPEND
);

export const append = (id: string, value: ItemValue): ActionAppend => ({
  type: ACTION_APPEND,
  data: {
    id,
    value,
  },
});

/* Insert action */

export const ACTION_INSERT = 'INSERT';

export interface ActionInsert extends Action<typeof ACTION_INSERT> {
  data: {
    id: string;
    index: number;
    value: ItemValue;
  };
}

export const isActionInsert = (action: Action): action is ActionInsert => (
  action.type === ACTION_INSERT
);

export const insert = (id: string, value: ItemValue, index: number): ActionInsert => ({
  type: ACTION_INSERT,
  data: {
    id,
    index,
    value,
  },
});

/* Remove action */

export const ACTION_REMOVE = 'REMOVE';

export interface ActionRemove extends Action<typeof ACTION_REMOVE> {
  data: {
    index: number;
  };
}

export const isActionRemove = (action: Action): action is ActionRemove => (
  action.type === ACTION_REMOVE
);

export const remove = (index: number): ActionRemove => ({
  type: ACTION_REMOVE,
  data: {
    index,
  },
});

/* Swap action */

export const ACTION_SWAP = 'SWAP';

export interface ActionSwap extends Action<typeof ACTION_SWAP> {
  data: {
    left: number;
    right: number;
  };
}

export const isActionSwap = (action: Action): action is ActionSwap => (
  action.type === ACTION_SWAP
);

export const swap = (left: number, right: number): ActionSwap => ({
  type: ACTION_SWAP,
  data: {
    left,
    right,
  },
});

/* Set action */

export const ACTION_SET = 'SET';

export interface ActionSet extends Action<typeof ACTION_SET> {
  data: {
    id: string;
    value: ItemValue;
  };
}

export const isActionSet = (action: Action): action is ActionSet => (
  action.type === ACTION_SET
);

export const set = (id: string, value: ItemValue): ActionSet => ({
  type: ACTION_SET,
  data: {
    id,
    value,
  },
});

/* Set focus action */

export const ACTION_SET_FOCUS = 'SET_FOCUS';

export interface ActionSetFocus extends Action<typeof ACTION_SET_FOCUS> {
  data: {
    index: number;
  };
}

export const isActionSetFocus = (action: Action): action is ActionSetFocus => (
  action.type === ACTION_SET_FOCUS
);

export const setFocus = (index: number): ActionSetFocus => ({
  type: ACTION_SET_FOCUS,
  data: {
    index,
  },
});

/* Default size action */

export const ACTION_SET_DEFAULT_SIZE = 'SET_DEFAULT_SIZE';

export interface ActionSetDefaultSize extends Action<typeof ACTION_SET_DEFAULT_SIZE> {
  data: {
    sizePx: number;
  };
}

export const isActionSetDefaultSize = (action: Action): action is ActionSetDefaultSize => (
  action.type === ACTION_SET_DEFAULT_SIZE
);

export const setDefaultSize = (sizePx: number): ActionSetDefaultSize => ({
  type: ACTION_SET_DEFAULT_SIZE,
  data: {
    sizePx,
  },
});

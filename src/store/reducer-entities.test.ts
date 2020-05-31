import { createStore } from 'redux';
import { append, set, reset } from './actions';
import { reducer, getValueById } from './reducer-entities';

it('can append items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  const state = store.getState();
  expect(getValueById(state, 'foo')).toBe('Foo value');
});

it('can insert items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  const state = store.getState();
  expect(getValueById(state, 'foo')).toBe('Foo value');
});

it('can set items', () => {
  const store = createStore(reducer);
  store.dispatch(set('foo', 'Foo value'));
  const state = store.getState();
  expect(getValueById(state, 'foo')).toBe('Foo value');
});

it('can reset items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(reset());
  const state = store.getState();
  expect(getValueById(state, 'foo')).toBeUndefined();
});

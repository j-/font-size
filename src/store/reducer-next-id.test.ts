import { createStore } from 'redux';
import { append, insert, remove, swap, set, reset } from './actions';
import { reducer, getNextId } from './reducer-next-id';

it('can append items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Bar value'));
  const state = store.getState();
  expect(getNextId(state)).toBe('2');
});

it('can insert items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('baz', 'Baz value'));
  store.dispatch(insert('bar', 'Bar value', 1));
  const state = store.getState();
  expect(getNextId(state)).toBe('3');
});

it('can remove items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Bar value'));
  store.dispatch(remove(0));
  const state = store.getState();
  expect(getNextId(state)).toBe('2');
});

it('can swap items', () => {
  const store = createStore(reducer);
  store.dispatch(append('bar', 'Bar value'));
  store.dispatch(append('baz', 'Baz value'));
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(swap(2, 1));
  store.dispatch(swap(1, 0));
  const state = store.getState();
  expect(getNextId(state)).toBe('3');
});

it('can set items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(set('bar', 'Bar value'));
  store.dispatch(set('baz', 'Baz value'));
  const state = store.getState();
  expect(getNextId(state)).toBe('3');
});

it('does not reset', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Bar value'));
  store.dispatch(append('baz', 'Baz value'));
  store.dispatch(reset());
  const state = store.getState();
  expect(getNextId(state)).toBe('3');
});

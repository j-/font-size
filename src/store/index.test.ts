import { createStore } from 'redux';
import { append, insert, remove, swap, set, reset } from './actions';
import { reducer, getAllIds, getAllValues, getNextId } from '.';

it('has one item by default', () => {
  const store = createStore(reducer);
  const state = store.getState();
  expect(getAllIds(state)).toHaveLength(1);
  expect(getAllValues(state)).toHaveLength(1);
});

it('can append items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Bar value'));
  const state = store.getState();
  expect(getAllIds(state)).toEqual(['root', 'foo', 'bar']);
  expect(getAllValues(state)).toEqual(['100%', 'Foo value', 'Bar value']);
  expect(getNextId(state)).toBe('2');
});

it('can insert items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('baz', 'Baz value'));
  store.dispatch(insert('bar', 'Bar value', 2));
  const state = store.getState();
  expect(getAllIds(state)).toEqual(['root', 'foo', 'bar', 'baz']);
  expect(getAllValues(state)).toEqual(['100%', 'Foo value', 'Bar value', 'Baz value']);
  expect(getNextId(state)).toBe('3');
});

it('can remove items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Bar value'));
  store.dispatch(remove(1));
  const state = store.getState();
  expect(getAllIds(state)).toEqual(['root', 'bar']);
  expect(getAllValues(state)).toEqual(['100%', 'Bar value']);
  expect(getNextId(state)).toBe('2');
});

it('can swap items', () => {
  const store = createStore(reducer);
  store.dispatch(append('bar', 'Bar value'));
  store.dispatch(append('baz', 'Baz value'));
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(swap(3, 2));
  store.dispatch(swap(2, 1));
  const state = store.getState();
  expect(getAllIds(state)).toEqual(['root', 'foo', 'bar', 'baz']);
  expect(getAllValues(state)).toEqual(['100%', 'Foo value', 'Bar value', 'Baz value']);
  expect(getNextId(state)).toBe('3');
});

it('can set items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Foo value'));
  store.dispatch(append('baz', 'Foo value'));
  store.dispatch(set('bar', 'Bar value'));
  store.dispatch(set('baz', 'Baz value'));
  const state = store.getState();
  expect(getAllIds(state)).toEqual(['root', 'foo', 'bar', 'baz']);
  expect(getAllValues(state)).toEqual(['100%', 'Foo value', 'Bar value', 'Baz value']);
  expect(getNextId(state)).toBe('3');
});

it('can reset items', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Bar value'));
  store.dispatch(append('baz', 'Baz value'));
  store.dispatch(reset());
  const state = store.getState();
  expect(getAllIds(state)).toEqual(['root']);
  expect(getAllValues(state)).toEqual(['100%']);
});

it('does not reset next ID', () => {
  const store = createStore(reducer);
  store.dispatch(append('foo', 'Foo value'));
  store.dispatch(append('bar', 'Bar value'));
  store.dispatch(append('baz', 'Baz value'));
  store.dispatch(reset());
  const state = store.getState();
  expect(getNextId(state)).toBe('3');
});

it('cannot insert items by setting outside length', () => {
  const store = createStore(reducer);
  store.dispatch(set('foo', 'Foo value'));
  store.dispatch(set('bar', 'Bar value'));
  store.dispatch(set('baz', 'Baz value'));
  const state = store.getState();
  expect(getAllIds(state)).toEqual(['root']);
  expect(getAllValues(state)).toEqual(['100%']);
  expect(getNextId(state)).toBe('0');
});

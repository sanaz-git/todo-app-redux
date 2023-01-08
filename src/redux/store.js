import { createStore } from 'redux';

import { rootReducer } from './rootReducer';

const persistentState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : {};

const store = createStore(rootReducer, persistentState);

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
});

export { store };

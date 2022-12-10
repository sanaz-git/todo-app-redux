import { createStore } from 'redux';

import reducer from './todo/todoReducer';

const store = createStore(reducer);

export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todos from './slices/todos';
import { logger } from 'redux-logger';

const reducer = combineReducers({
  // add reducers
  todos: todos,
});

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer,
  middleware,
});

export default store;

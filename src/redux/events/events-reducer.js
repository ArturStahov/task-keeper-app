import { createReducer, combineReducers } from '@reduxjs/toolkit';

const eventReducer = createReducer([], {});

const loaderReducer = createReducer(false, {});

const errorReducer = createReducer(null, {});

const rootEventsReducer = combineReducers({
  events: eventReducer,
  loader: loaderReducer,
  error: errorReducer,
});

export default rootEventsReducer;

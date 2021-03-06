import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actionType from './events-action';

const eventReducer = createReducer([], {
  [actionType.createEventSuccess]: (state, { payload }) => [...state, payload],
});

const loaderReducer = createReducer(false, {
  [actionType.createEventRequest]: () => true,
  [actionType.createEventSuccess]: () => false,
  [actionType.createEventError]: () => false,
});

const errorReducer = createReducer(null, {
  [actionType.createEventRequest]: () => null,
  [actionType.createEventError]: (_, { payload }) => payload,
});

const rootEventsReducer = combineReducers({
  events: eventReducer,
  loader: loaderReducer,
  error: errorReducer,
});

export default rootEventsReducer;

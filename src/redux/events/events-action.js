import { createAction } from '@reduxjs/toolkit';

export const createEventRequest = createAction('event/createEventRequest');
export const createEventSuccess = createAction('event/createEventSuccess');
export const createEventError = createAction('event/createEventError');

import { createAction } from '@reduxjs/toolkit';

export const createEventRequest = createAction('event/createEventRequest');
export const createEventSuccess = createAction('event/createEventSuccess');
export const createEventError = createAction('event/createEventError');

export const getEventRequest = createAction('event/getEventRequest');
export const getEventSuccess = createAction('event/getEventSuccess');
export const getEventError = createAction('event/getEventError');

export const deleteEventRequest = createAction('event/deleteEventRequest');
export const deleteEventSuccess = createAction('event/deleteEventSuccess');
export const deleteEventError = createAction('event/deleteEventError');

export const updateEventRequest = createAction('event/updateEventRequest');
export const updateEventSuccess = createAction('event/updateEventSuccess');
export const updateEventError = createAction('event/updateEventError');

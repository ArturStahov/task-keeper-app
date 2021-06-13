import * as action from './events-action';
import {
  fetchCreateNote,
  fetchGetAllNotes,
  fetchGetNoteById,
  fetchDeleteNote,
  fetchEditNote,
} from '../../services/fetchApi';

export const createEvent = event => async dispatch => {
  dispatch(action.createEventRequest());

  try {
    const data = {
      name: event.name,
      note: event.description,
      priority: event.priority,
    };
    const result = await fetchCreateNote(data);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

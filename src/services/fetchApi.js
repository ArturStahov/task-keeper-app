import axios from 'axios';

axios.defaults.baseURL = ' https://task-keeper-api-v2.herokuapp.com';

export const fetchLogin = ({ email, password }) => {
  return axios.post('/api/users/login', {
    email,
    password,
  });
};

export const fetchRegistration = ({ email, password, name }) => {
  return axios.post('/api/users/registration', {
    name,
    email,
    password,
  });
};

// export const fetchGetCurrentUser = () => {
//     return axios.get('/users/current');
// };

export const fetchAddUserAvatar = avatar => {
  return axios.patch(`/api/users/avatar`, avatar);
};

export const fetchLogout = () => {
  return axios.post('/api/users/logout');
};

export const fetchGetAllNotes = () => {
  return axios.get('/api/notes/');
};

export const fetchCreateNote = item => {
  return axios.post(`/api/notes/`, item);
};

export const fetchGetNoteById = id => {
  return axios.get(`/api/notes/${id}`);
};

export const fetchDeleteNote = id => {
  return axios.delete(`/api/notes/${id}`);
};

export const fetchEditNote = ({ name, note, isImportant, id }) => {
  const update = {
    name,
    note,
    isImportant,
  };
  return axios.patch(`/api/notes/${id}`, update);
};

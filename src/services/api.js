import axios from 'axios';

axios.defaults.baseURL = 'https://63ba01c756043ab3c793f501.mockapi.io';

export const fetch = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const post = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const del = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

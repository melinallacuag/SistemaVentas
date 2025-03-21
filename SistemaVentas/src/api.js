import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.salesapi.test',
  withCredentials: true,
});

export default api;

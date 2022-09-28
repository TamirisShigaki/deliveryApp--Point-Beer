const axios = require('axios');

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

// export const requestUser = async (endpoint, email) => { // pq duas se são a mesma coisa? Podemos usar uma só generica?
//   const { data } = await api.post(endpoint, email);
//   return data;
// };

// export const requestLogin = async (endpoint, body) => {
//   const { data } = await api.post(endpoint, body);
//   return data;
// };

export const sendData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;

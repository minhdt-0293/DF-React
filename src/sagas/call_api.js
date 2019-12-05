import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/';
const USER_TOKEN = localStorage.getItem('token');

const callApi = (method, subUrl, params) => {
  return axios({
    method: method,
    url: API_BASE_URL + subUrl,
    headers: { token: USER_TOKEN },
    data: params
  });
};

export default callApi;

import axios from 'axios';

export const baseHttpURL = `http://127.0.0.1:5000`;
const timeout = 30000e3


export const axiosInstanceToAPI = axios.create({
  baseURL: baseHttpURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});
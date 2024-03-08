import axios from 'axios';

export const baseHttpURL = `https://4a73-109-100-14-206.ngrok-free.app`;
const timeout = 30000e3


export const axiosInstanceToAPI = axios.create({
  baseURL: baseHttpURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});
import axios from 'axios';

export const baseHttpURL = `https://01ae-109-100-14-206.ngrok-free.app`;
const timeout = 30000e3


export const axiosInstanceToAPI = axios.create({
  baseURL: baseHttpURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosAuthInstanceToAPI = axios.create({
  baseURL: baseHttpURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth-token'))}`,
  },
});
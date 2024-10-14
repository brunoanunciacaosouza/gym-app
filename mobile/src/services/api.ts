import { AppError } from '@utils/AppError';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.0.149:3333/',
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(new AppError(error));
    }
  },
);

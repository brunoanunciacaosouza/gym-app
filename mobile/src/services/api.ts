import axios, { AxiosInstance } from 'axios';
import { AppError } from '@utils/AppError';

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

export const api = axios.create({
  baseURL: 'http://10.0.0.149:3333/',
}) as APIInstanceProps;

api.registerInterceptTokenManager = (signOut) => {
  const interceptTOkenManager = api.interceptors.response.use(
    (response) => {
      return response;
    },
    (requestError) => {
      if (requestError?.response?.status === 401) {
        if (
          requestError.response.data?.message === 'token.expirado' ||
          requestError.response.data?.message === 'token.invalid'
        ) {
        }

        signOut();
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message));
      } else {
        return Promise.reject(new AppError(requestError));
      }
    },
  );

  return () => {
    api.interceptors.response.eject(interceptTOkenManager);
  };
};

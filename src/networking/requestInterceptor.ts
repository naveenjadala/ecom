import {InternalAxiosRequestConfig, AxiosRequestHeaders} from 'axios';

// const headers: AxiosRequestHeaders = {
//   'Content-Type': 'application/json',
//   Authorization: 'Bearer YOUR_ACCESS_TOKEN',
// };

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  return config;
};

export {requestInterceptor};

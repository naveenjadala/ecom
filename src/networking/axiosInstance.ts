/**
 * Axios Configuration
 *
 * This module exports a pre-configured Axios instance to handle HTTP requests.
 * It includes interceptors for response and request handling.
 */

// Importing the axios library along with AxiosInstance for type definitions
import axios, {AxiosInstance} from 'axios';

// Importing response and request interceptors
import {
  responseInterceptor,
  responseErrorInterceptor,
} from './responseInterceptor';
import {requestInterceptor} from './requestInterceptor';

// Base URL for the API
const baseUrl = 'https://www.rijksmuseum.nl/api/';

// Creating an instance of Axios with specified configurations
const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  headers: {},
});

// Adding interceptors for handling responses and requests
axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor,
);
axiosInstance.interceptors.request.use(requestInterceptor);

// Exporting the configured Axios instance as the default export
export default axiosInstance;

/**
 * Axios Response Interceptor
 *
 * This module exports functions for intercepting and handling successful HTTP responses and errors.
 * The responseInterceptor logs the status of successful responses.
 * The responseErrorInterceptor logs the status of error responses.
 */

// Importing AxiosError and AxiosResponse from axios
import {AxiosError, AxiosResponse} from 'axios';

/**
 * Response Interceptor
 *
 * @param {AxiosResponse} response - The AxiosResponse object representing a successful HTTP response.
 * @returns {AxiosResponse} - The original AxiosResponse object.
 */
const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

/**
 * Response Error Interceptor
 *
 * @param {AxiosError} error - The AxiosError object representing an error in the HTTP response.
 * @returns {Promise<AxiosError>} - A rejected Promise containing the original AxiosError object.
 */
const responseErrorInterceptor = (error: AxiosError) => {
  // Rejecting the Promise with the original AxiosError object
  return Promise.reject(error);
};

export {responseInterceptor, responseErrorInterceptor};

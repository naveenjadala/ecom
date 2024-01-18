/**
 * useApiCall Hook
 *
 * This custom hook provides a convenient way to make API calls using Axios.
 * It includes methods for both GET and POST requests, and returns loading, error, and data states.
 * The hook is designed to be used in functional components.
 *
 * @template T - The data type expected in the response
 *
 * @returns {UseApiCallResult<T>} - An object containing loading, error, data, getApi, and postApi.
 */

// React and useState imports
import React, {useState} from 'react';

// Axios instance for API calls
import axiosInstance from './axiosInstance';

// Result type for the useApiCall hook
interface UseApiCallResult<T> {
  loading: boolean; // Loading state indicator
  error: string | null; // Error message or null if no error
  data: T | null; // Response data or null if not available
  getApi: (endpoint: string, requestParams?: {}) => void; // Method for making GET requests
  postApi: (endpoint: string, requestBody?: {}, requestParams?: {}) => void; // Method for making POST requests
}

// Custom hook for making API calls
const useApiCall = <T>(): UseApiCallResult<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  // Method for making GET requests
  const getApi = async (endpoint: string, requestParams?: any) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get<T>(`${endpoint}?`, {
        params: requestParams,
      });
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Method for making POST requests
  const postApi = async (
    endpoint: string,
    requestBody?: {},
    params?: {},
    requestParams?: {},
  ) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.post<T>(
        `${endpoint}/${params}`,
        requestBody,
        {params: requestParams},
      );
      setData(response.data);
    } catch (err) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  return {loading, error, data, getApi, postApi};
};

export {useApiCall};

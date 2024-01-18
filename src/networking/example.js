import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import axiosInstance from 'path-to-your-axios-instance';

interface UserData {
  id: number;
  username: string;
  email: string;
  // Add other properties as needed
}

interface GetUserByIdParams {
  userId: number;
}

const useUserById = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  const getUserById = async (params: GetUserByIdParams) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(`/users/${params.userId}`);
      setUserData(response.data);
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, userData, getUserById };
};

export default useUserById;


// request param
import { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import axiosInstance from 'path-to-your-axios-instance';

interface UserData {
  id: number;
  username: string;
  email: string;
  // Add other properties as needed
}

interface GetUserByIdParams {
  userId: number;
}

interface UseUserByIdResult {
  loading: boolean;
  error: string | null;
  userData: UserData | null;
  getUserById: (params: GetUserByIdParams, requestParams?: any) => void;
}

const useUserById = (): UseUserByIdResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  const getUserById = async (params: GetUserByIdParams, requestParams?: any) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(`/users/${params.userId}`, {
        params: requestParams, // Pass request parameters here
      });

      setUserData(response.data);
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, userData, getUserById };
};

export default useUserById;

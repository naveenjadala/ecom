/**
 * API Functions Module
 *
 * This module provides functions for making specific API requests related to user and art data.
 * It uses the Axios library for HTTP requests and the axiosInstance for a configured base URL.
 *
 * @module apiFunctions
 */

// AxiosResponse import from Axios library
import {AxiosResponse} from 'axios';

// Axios instance for API calls
import axiosInstance from './axiosInstance';

// Importing homeEndPoints from urls module
import {homeEndPoints} from './urls';

// Interface for user data structure
interface UserData {
  id: number;
  username: string;
  email: string;
  // Add other properties as needed
}

// Interface for art data structure
interface ArtData {
  id: string;
  objectNumber: string;
  title: string;
}

/**
 * Get user data by ID from the API
 *
 * @async
 * @returns {Promise<AxiosResponse<UserData[]>>} - Promise with AxiosResponse containing user data
 */
const getUserById = async (): Promise<AxiosResponse<UserData[]>> => {
  try {
    const response = await axiosInstance.get(homeEndPoints.getUsers);
    return response;
  } catch (error) {
    // Handle error (e.g., log, rethrow, etc.)
    throw error;
  }
};

/**
 * Get art list from the API
 *
 * @async
 * @param {string} url - The API endpoint URL
 * @param {Object} params - Request parameters for the API call
 * @returns {Promise<AxiosResponse<ArtData[]>>} - Promise with AxiosResponse containing art data
 */
const getArtList = async (
  url: string,
  params: {},
): Promise<AxiosResponse<ArtData[]>> => {
  try {
    const response = await axiosInstance.get(url, {params: params});
    return response;
  } catch (error) {
    // Handle error (e.g., log, rethrow, etc.)
    throw error;
  }
};

// Exporting the functions for use in other modules
export {getUserById, getArtList};

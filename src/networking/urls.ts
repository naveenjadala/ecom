/**
 * Home Endpoints
 *
 * This module exports objects containing endpoint paths related to home functionality.
 * The homeEndPoints object includes paths like getUsers.
 */

// Object containing home-related endpoint paths
const homeEndPoints = {
  getUsers: '/users', // Path to get users
};

/**
 * Profile Endpoints
 *
 * This module exports objects containing endpoint paths related to profile functionality.
 * The profileEndPoints object includes paths like getProfile.
 */

// Object containing profile-related endpoint paths
const profileEndPoints = {
  getProfile: '/getProfile', // Path to get user profile
};

/**
 * Art Gallery Endpoints
 *
 * This module exports objects containing endpoint paths related to art gallery functionality.
 * The getArtgallery object includes paths like getAllArts.
 */

// Object containing art gallery-related endpoint paths
const getArtgallery = {
  getAllArts: 'nl/collection', // Path to get all arts in the gallery
};

// Exporting endpoint objects
export {homeEndPoints, profileEndPoints, getArtgallery};

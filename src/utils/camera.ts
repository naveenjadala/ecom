import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

/**
 * Asynchronous function that initializes the camera and launches it to capture a photo.
 *
 * @return {Promise<CameraPhoto>} A promise that resolves with the captured photo.
 */
export const Camera = async () => {
  const options: CameraOptions = {
    mediaType: 'photo',
  };
  return await launchCamera(options);
};

/**
 * Asynchronous function that calls the launchImageLibrary function after setting up the options for the camera.
 *
 * @return {Promise<CameraCapturedPicture | undefined>} A promise that resolves to the image captured by the camera, or undefined if no image was captured.
 */
export const Gallery = async () => {
  const options: CameraOptions = {
    mediaType: 'photo',
  };
  return await launchImageLibrary(options);
};

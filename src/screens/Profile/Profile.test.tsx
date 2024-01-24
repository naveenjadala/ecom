import {fireEvent, render, screen, waitFor} from '../../test/test-utils';
import Profile from './Profile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

jest.mock('react-native-image-picker', () => ({
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
}));

// Mock the Camera utility separately
jest.mock('../../utils/camera', () => ({
  Camera: jest.fn().mockReturnValue({
    assets: [{uri: 'mocked_camera_image_uri'}],
  }),
  Gallery: jest.fn().mockReturnValue({
    asserts: [{uri: 'mocked_gallery_image_uri'}],
  }),
}));

describe('Profile', () => {
  test('should render Profile screen snapShort', () => {
    render(<Profile />);
    expect(screen).toMatchSnapshot();
  });
});

describe('should render Profile', () => {
  test('should render photo modal on click', () => {
    render(<Profile />);

    // Check if photo modal is not open
    const getPhotoModal = screen.queryByTestId('photoPickerModal');
    expect(getPhotoModal).toBeNull();

    // Open photo modal
    fireEvent.press(screen.getByTestId('profileImage'));
    const getPhotoModalAfterClick = screen.queryByTestId('photoPickerModal');
    expect(getPhotoModalAfterClick).toBeTruthy();

    // Close photo modal
    fireEvent.press(screen.getByTestId('cancel'));
    const getPhotoModalAfterClose = screen.queryByTestId('photoPickerModal');
    expect(getPhotoModalAfterClose).toBeNull();
  });

  test('should open camera', async () => {
    render(<Profile />);
    // Check if the modal is visible
    fireEvent.press(screen.getByTestId('profileImage'));
    const getPhotoModalAfterClick = screen.queryByTestId('photoPickerModal');
    expect(getPhotoModalAfterClick).toBeTruthy();

    // Open camera
    const getCameraButton = screen.getByTestId('takePhoto');
    fireEvent.press(getCameraButton);
    await waitFor(() =>
      expect(screen.queryByTestId('photoPickerModal')).toBeNull(),
    );

    // Check if image is set
    await waitFor(() =>
      expect(screen.getByTestId('img').props.source.uri).toBe(
        'mocked_camera_image_uri',
      ),
    );
  });
});

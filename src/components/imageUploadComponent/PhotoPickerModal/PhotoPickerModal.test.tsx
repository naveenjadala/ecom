import {render, screen} from '@testing-library/react-native';
import React from 'react';
import PhotoPickerModal from './PhotoPickerModal';

describe('PhotoPickerModal', () => {
  it('renders correctly', () => {
    render(
      <PhotoPickerModal
        visible={false}
        closeModal={() => {}}
        openCamera={() => {}}
        openGallery={() => {}}
      />,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});

// describe('PhotoPickerModal', () => {
//   test('should render elements', () => {
//     render(<PhotoPickerModal visible={false} closeModal={() => {}} />);
//     // const getTakePhotoButton = screen.getByTestId('takePhoto');
//     // const getChoosePhotoButton = screen.getByTestId('choosePhoto');
//     const getCancelButton = screen.getByRole('button');
//     // expect(getTakePhotoButton).toBeOnTheScreen();
//     // expect(getChoosePhotoButton).toBeOnTheScreen();
//     expect(getCancelButton).toBeTruthy();
//   });
// });

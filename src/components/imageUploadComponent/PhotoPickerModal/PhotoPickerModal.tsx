import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {photoPickerStyles} from './styles';
import {Divider} from 'react-native-paper';

type PhotoPickerModalProps = {
  visible: boolean;
  closeModal: () => void;
  openCamera: () => void;
  openGallery: () => void;
};

/**
 * Photo picker modal component.
 *
 * @param {PhotoPickerModalProps} visible - Flag to control visibility
 * @param {function} setVisible - Function to set visibility
 * @return {JSX.Element} The modal component with photo picker options
 */
const PhotoPickerModal: FC<PhotoPickerModalProps> = ({
  visible,
  closeModal,
  openCamera,
  openGallery,
}) => {
  return (
    <Modal
      testID="photoPickerModal"
      visible={visible}
      onRequestClose={closeModal}
      presentationStyle="overFullScreen"
      animationType="slide"
      statusBarTranslucent={false}
      transparent>
      <View style={photoPickerStyles.container}>
        <View style={photoPickerStyles.subContainer}>
          <View style={photoPickerStyles.buttonContainer}>
            <TouchableOpacity
              testID="takePhoto"
              style={photoPickerStyles.button}
              onPress={openCamera}>
              <Text style={photoPickerStyles.text}>Take Photo</Text>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity
              testID="choosePhoto"
              style={photoPickerStyles.button}
              onPress={openGallery}>
              <Text style={photoPickerStyles.text}>Choose Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={photoPickerStyles.buttonContainer}>
            <TouchableOpacity
              testID="cancel"
              accessibilityRole="button"
              style={photoPickerStyles.button}
              onPress={() => closeModal()}>
              <Text style={photoPickerStyles.text}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PhotoPickerModal;

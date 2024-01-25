import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import {editProfileStyles} from './styles';
import PhotoPickerModal from '../../components/imageUploadComponent/PhotoPickerModal/PhotoPickerModal';
import {Camera, Gallery} from '../../utils/camera';
import DoubleTextInput from '../../components/customTextInput/doubleTextInput/customTextInput';
import SingleTextInput from '../../components/customTextInput/singleTextInput/SingleTextInput';
import EditProfileHeader from './Components/EditProfileHeader';
import {useNavigation} from '@react-navigation/native';
import {ProfileStackNavigationProp} from '../../navigation/Route';

type Props = {};

/**
 * EditProfile component renders the user's profile with image, name, and other events.
 *
 * @param {Props} props - the props object containing the necessary data
 * @return {JSX.Element} the rendered user profile component
 */
const EditProfile = (props: Props) => {
  const {navigate, goBack} = useNavigation<ProfileStackNavigationProp>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [image, setImage] = useState<string | undefined>('');

  /**
   * Function to open and close the image modal.
   */
  const openImageModal = () => {
    setOpenModal(prevState => !prevState);
  };

  /**
   * Opens the camera and sets the image using the first asset.
   *
   * @return {Promise<void>}
   */
  const openCamera = async () => {
    const camera = await Camera();
    setImage(camera.assets?.[0].uri);
    setOpenModal(false);
  };

  /**
   * Opens the gallery, selects the first image, sets the image, and closes the modal.
   *
   * @return {Promise<void>}
   */
  const openGallery = async () => {
    const camera = await Gallery();
    setOpenModal(false);
    setImage(camera.assets?.[0].uri);
  };

  const onCancel = () => {
    goBack();
  };

  const onSave = () => {
    navigate('Profile');
  };

  return (
    <ScrollView style={editProfileStyles.scroll}>
      <>
        <EditProfileHeader onCancel={onCancel} onSave={onSave} />
        <View style={editProfileStyles.container}>
          <View style={editProfileStyles.profileImage}>
            <ProfileImage onClick={openImageModal} image={image} />
            <Text style={{color: 'black'}}>Edit</Text>
            <DoubleTextInput
              label="Name"
              placeholderOne="First Name"
              placeholderTwo="Last Name"
              containerStyle={{marginVertical: 10}}
            />
            <SingleTextInput
              placeholder="Town/City, Country/Region"
              label="Hometown"
              containerStyle={{marginVertical: 10}}
            />

            <SingleTextInput
              placeholder="150 characters"
              label="Bio"
              multiline
              inputStyle={{height: 100, textAlignVertical: 'top'}}
              containerStyle={{marginVertical: 10}}
            />
          </View>

          <PhotoPickerModal
            visible={openModal}
            closeModal={openImageModal}
            openCamera={openCamera}
            openGallery={openGallery}
          />
        </View>
      </>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});

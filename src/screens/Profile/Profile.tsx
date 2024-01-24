import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {profileStyles} from './styles';
import EditButton from './components/EditButton/EditButton';
import SettingsIcon from '../../assets/images/settingIcon.svg';
import PassIcon from '../../assets/images/passIcon.svg';
import OrderIcon from '../../assets/images/orderIcon.svg';
import EventIcon from '../../assets/images/eventIcon.svg';
import ProfileElements from './components/ProfileElements/ProfileElements';
import ProfileEvents from './components/ProfileEvents/ProfileEvents';
import PhotoPickerModal from '../../components/imageUploadComponent/PhotoPickerModal/PhotoPickerModal';
import {Camera, Gallery} from '../../utils/camera';
import {ProfileStackNavigationProp} from '../../navigation/Route';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import {Divider} from 'react-native-paper';

type Props = {};
/**
 * Profile component renders the user's profile with image, name, and events.
 *
 * @param {Props} props - the props object containing the necessary data
 * @return {JSX.Element} the rendered user profile component
 */
const Profile = (props: Props) => {
  const {navigate} = useNavigation<ProfileStackNavigationProp>();
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

  return (
    <ScrollView style={profileStyles.scroll}>
      <>
        <View style={profileStyles.header} />
        <View style={profileStyles.container}>
          <View style={profileStyles.profileImage}>
            <ProfileImage onClick={openImageModal} image={image} />
          </View>
          <Text style={profileStyles.profileName}>Naveen Jadala</Text>
          <View style={profileStyles.profileImage}>
            <EditButton onClick={() => navigate('EditProfile')} />
          </View>
          <View style={profileStyles.profileElements}>
            <ProfileElements
              title={'Orders'}
              onClick={() => console.log('click')}
              elementImage={<OrderIcon width={30} height={30} />}
            />
            <Divider style={profileStyles.divider} />
            <ProfileElements
              title={'Pass'}
              onClick={() => console.log('click')}
              elementImage={<PassIcon width={30} height={30} />}
            />
            <Divider style={profileStyles.divider} />
            <ProfileElements
              title={'Events'}
              onClick={() => console.log('click')}
              elementImage={<EventIcon width={30} height={30} />}
            />
            <Divider style={profileStyles.divider} />
            <ProfileElements
              title={'Settings'}
              onClick={() => console.log('click')}
              elementImage={<SettingsIcon width={30} height={30} />}
            />
          </View>
        </View>
        <View style={profileStyles.profileEvents}>
          <ProfileEvents
            title="INBOX"
            subTitle="View message"
            onClick={() => console.log('click')}
          />
          <Divider />
          <ProfileEvents
            title="YOUR NIKE MEMBER REWARDS"
            subTitle="View rewards"
            onClick={() => console.log('click')}
          />
        </View>
        <PhotoPickerModal
          visible={openModal}
          closeModal={openImageModal}
          openCamera={openCamera}
          openGallery={openGallery}
        />
      </>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

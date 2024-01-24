import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {profileImgStyles} from './style';
import Avatar from '../../../../assets/images/avatar.svg';

type Props = {
  onClick: () => void | undefined;
  image?: string;
};

/**
 * Renders the profile image component.
 *
 * @param {Props} props - the props object containing the necessary data for rendering the component.
 * @return {JSX.Element} - the rendered profile image component.
 */
const ProfileImage = ({onClick, image}: Props) => {
  return (
    <TouchableOpacity
      testID="profileImage"
      style={profileImgStyles.profileImage}
      accessibilityRole="button"
      onPress={() => onClick()}>
      <>
        {image ? (
          <Image
            width={100}
            height={100}
            source={{uri: image}}
            style={profileImgStyles.image}
            accessibilityRole="image"
            testID="img"
          />
        ) : (
          <Avatar width={100} height={100} />
        )}
      </>
    </TouchableOpacity>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});

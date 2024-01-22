import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {profileImgStyles} from './style';
import {Image} from 'react-native-svg';
import Avatar from '../../../../assets/images/avatar.svg';

type Props = {};

/**
 * Renders the profile image component.
 *
 * @param {Props} props - the props object containing the necessary data for rendering the component.
 * @return {JSX.Element} - the rendered profile image component.
 */
const ProfileImage = (props: Props) => {
  return (
    <TouchableOpacity
      style={profileImgStyles.profileImage}
      accessibilityRole="button">
      <Avatar width={100} height={100} />
    </TouchableOpacity>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});

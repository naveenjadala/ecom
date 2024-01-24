import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {eventStyles} from './styles';

type ProfileElementProps = {
  title: string;
  elementImage?: JSX.Element;
  onClick: () => void;
};

/**
 * React functional component for displaying profile events.
 *
 * @param {ProfileElementProps} title - The title of the profile event.
 * @param {ProfileElementProps} elementImage - The image element for the profile event.
 * @return {JSX.Element} The rendered profile events component.
 */
const ProfileElements: FC<ProfileElementProps> = ({
  title,
  elementImage,
  onClick,
}) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => {
        onClick();
      }}
      style={eventStyles.container}>
      {elementImage}
      <Text style={eventStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileElements;

const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {editButtonStyles} from './styles';

type Props = {onClick: () => void};
/**
 * Renders an EditButton component.
 *
 * @param {Props} props - the props for the EditButton component
 * @return {JSX.Element} the rendered EditButton component
 */
const EditButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={editButtonStyles.container}
      accessibilityRole="button"
      onPress={() => props.onClick()}>
      <Text style={editButtonStyles.text}>Edit Profile</Text>
    </TouchableOpacity>
  );
};

export default EditButton;

const styles = StyleSheet.create({});

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-paper';
import {EditHeaderStyles} from './styles';
import {NavigationProp} from '@react-navigation/native';
import {editProfileStyles} from '../styles';

type EditProfileProps = {
  onCancel: () => void;
  onSave: () => void;
};

/**
 * Renders the EditProfileHeader component.
 *
 * @param {EditProfileProps} props - the properties for the component
 * @return {JSX.Element} the rendered component
 */
const EditProfileHeader = (props: EditProfileProps) => {
  return (
    <>
      <View style={EditHeaderStyles.container} testID="editProfileHeader">
        <TouchableOpacity onPress={props.onCancel} testID="cancelButton">
          <Text style={EditHeaderStyles.text}>Cancel</Text>
        </TouchableOpacity>
        <Text onPress={() => props.onSave()} style={EditHeaderStyles.text}>
          Save
        </Text>
      </View>
      <Divider />
    </>
  );
};

export default EditProfileHeader;

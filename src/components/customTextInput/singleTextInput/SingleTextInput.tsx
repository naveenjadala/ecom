import {View, Text, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {customInputStyles} from './styles';

interface textInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  containerStyle?: object;
  inputStyle?: object;
}

/**
 * Renders a single text input component.
 *
 * @param {textInputProps} props - the properties for the text input component
 * @return {JSX.Element} the rendered single text input component
 */
const SingleTextInput = (props: textInputProps) => {
  return (
    <View style={{...customInputStyles.container, ...props.containerStyle}}>
      <Text>{props.label}</Text>
      <TextInput
        style={{...customInputStyles.text, ...props.inputStyle}}
        placeholder={props.placeholder}
        {...props}
      />
    </View>
  );
};

export default SingleTextInput;

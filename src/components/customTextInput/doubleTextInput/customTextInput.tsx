import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {customInputStyles} from './styles';

interface textInputProps extends TextInputProps {
  label?: string;
  placeholderOne?: string;
  placeholderTwo?: string;
  containerStyle?: object;
}

/**
 * Renders a custom double text input component.
 *
 * @param {textInputProps} props - the properties for the custom input
 * @return {JSX.Element} the custom double text input component
 */
const DoubleTextInput = (props: textInputProps) => {
  return (
    <View style={{...customInputStyles.container, ...props.containerStyle}}>
      <Text>{props.label}</Text>
      <TextInput
        style={customInputStyles.textOne}
        placeholder={props.placeholderOne}
        {...props}
      />
      <TextInput
        style={customInputStyles.textTwo}
        placeholder={props.placeholderTwo}
        {...props}
      />
    </View>
  );
};

export default DoubleTextInput;

const styles = StyleSheet.create({});

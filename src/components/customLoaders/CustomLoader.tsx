import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

type Props = {};

const CustomLoader = (props: Props) => {
  return (
    <LottieView
      style={{height: 20, width: 20}}
      source={require('../../assets/lottie/loader.json')}
      autoPlay
      loop
    />
  );
};

export default CustomLoader;

const styles = StyleSheet.create({});

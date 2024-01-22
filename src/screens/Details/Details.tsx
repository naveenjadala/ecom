import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '../../navigation/Route';

type Props = {};

/**
 * Renders the Details component.
 *
 * @param {Props} props - The props object containing the component's properties.
 * @return {ReactElement} The rendered Details component.
 */
const Details = (props: Props) => {
  const {navigation} = useNavigation<HomeStackNavigationProp>();
  return (
    <View>
      <Button title="press " onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});

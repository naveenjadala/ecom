import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArtObjects} from '../types';
import {getFontSize} from '../../../assets/fonts/FontSizes';

type RenderItemProps = {
  item: ArtObjects;
  index: number;
};

/**
 * RenderItems function renders the items in the FlatList.
 *
 * @param {RenderItemProps} item - the item to be rendered
 * @param {number} index - the index of the item
 * @return {JSX.Element} - The rendered view component
 */
const RenderItems = ({item, index}: RenderItemProps) => {
  return (
    <View style={{...styles.container}}>
      <Text>{index}</Text>
      <Text style={styles.textSty}>{item.title}</Text>
      <Text>{item.id}</Text>
    </View>
  );
};

export default RenderItems;

const styles = StyleSheet.create({
  container: {
    height: 60,
    margin: 20,
    backgroundColor: 'white',
  },
  textSty: {
    fontSize: getFontSize(16),
  },
});

import {FlatList, FlatListProps, ListRenderItem} from 'react-native';
import React from 'react';

interface UseCustomLatListProps<T> extends FlatListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  loadMoreData?: () => void;
}

/**
 * Generates a custom FlatList component with additional props.
 *
 * @param {UseCustomLatListProps<T>} data - The data to be rendered in the FlatList.
 * @param {Function} renderItem - The function that renders each item in the FlatList.
 * @param {Function} loadMoreData - The function to be called when reaching the end of the list to load more data.
 * @param {Object} props - Additional props to be passed to the FlatList component.
 * @return {JSX.Element} The custom FlatList component.
 */
const CustomFlatList = <T extends any>({
  data,
  renderItem,
  loadMoreData,
  ...props
}: UseCustomLatListProps<T>) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      {...props}
      onEndReachedThreshold={0.2}
      onEndReached={loadMoreData}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default CustomFlatList;

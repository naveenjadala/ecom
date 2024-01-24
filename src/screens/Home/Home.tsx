import {ActivityIndicator, Button, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import isEqual from 'lodash/isEqual';

import {useApiCall} from '../../networking/useApiCall';
import {getArtgallery} from '../../networking/urls';
import CustomFlatList from '../../components/customLists/CustomFlatList';
import {ArtData, ArtObjects} from './types';
import {styles} from './styles';
import RenderItems from './components/RenderItems';
import HomeIcon from '../../assets/images/home.svg';
import {HomeStackParamList, TabParamList} from '../../navigation/Route';
import {TouchableOpacity} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeStackNavigationProp = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList, 'Home'>,
    BottomTabNavigationProp<TabParamList>
  >;
};

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home: React.FC<HomeStackNavigationProp> = ({navigation}) => {
  const {loading, error, data, getApi} = useApiCall<ArtData>();
  const [artData, setArtData] = useState<ArtObjects[]>([]);
  const [page, setPage] = useState(1);
  // const {navigate} = useNavigation<HomeStackNavigationProp>();

  useEffect(() => {
    getApi(getArtgallery.getAllArts, {key: 'GMZbiDud', p: page});
  }, [page]);

  useEffect(() => {
    if (data?.artObjects && !isEqual(data?.artObjects, artData)) {
      setArtData(prevData => [...prevData, ...data?.artObjects]);
    }
  }, [data, artData]);

  /**
   * Loads more data if scroll to the bottom.
   *
   * @return {void}
   */
  const loadMoreData = () => {
    if (!loading) {
      setPage(prevData => prevData + 1);
    }
  };

  // Navigates to the 'Details' screen.
  const navigateToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={{...styles.container}}>
      <Icon name="rocket" size={30} color="#900" />
      <TouchableOpacity accessibilityRole="button" onPress={navigateToDetails}>
        <Text>press</Text>
      </TouchableOpacity>
      <HomeIcon
        height={20}
        width={20}
        stroke={'pink'}
        style={{borderColor: '#fff'}}
      />
      <CustomFlatList
        data={artData}
        renderItem={RenderItems}
        keyExtractor={item => item.id}
        ListEmptyComponent={() =>
          (!loading && <Text>No data found</Text>) || null
        }
        loadMoreData={loadMoreData}
        ListFooterComponent={() =>
          (loading && <ActivityIndicator size={30} />) || null
        }
      />
    </View>
  );
};

export default Home;

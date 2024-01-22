import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  Details: undefined;
};

export type ShopStackParamList = {
  Shop: undefined;
};

export type BagStackParamList = {
  Bag: undefined;
};

export type FavoritesStackParamList = {
  Favorites: undefined;
};

export type TabParamList = {
  homeStack: HomeStackParamList;
  profileStack: ProfileStackParamList;
  shopStack: ShopStackParamList;
  bagStack: BagStackParamList;
  favoritesStack: FavoritesStackParamList;
};

export type HomeStackNavigationProp = {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<HomeStackParamList, 'Home'>,
    BottomTabNavigationProp<TabParamList>
  >;
};

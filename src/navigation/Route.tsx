import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export type TabParamList = {
  homeStack: undefined;
  profileStack: undefined;
};

export type HomeStackProps = {
  Home: undefined;
  Details: undefined;
};

export type ProfileStackProps = {
  Profile: undefined;
  Details: undefined;
};

export type HomeStackNavigationProp = NativeStackNavigationProp<
  HomeStackProps,
  'Home'
>;

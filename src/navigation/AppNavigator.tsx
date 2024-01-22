/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AuthStackParamList,
  BagStackParamList,
  FavoritesStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
  ShopStackParamList,
  TabParamList,
} from './Route';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Details from '../screens/Details/Details';
import HomeIcon from '../assets/images/home.svg';
import ProfileIcon from '../assets/images/profileIcon.svg';
import ShopIcon from '../assets/images/shopIcon.svg';
import BagIcon from '../assets/images/bagIcon.svg';
import FavoritesIcon from '../assets/images/favoritesIcon.svg';
import {colors} from '../assets/colors';
import ShopHome from '../screens/Shop/ShopHome/ShopHome';
import BagHome from '../screens/Bag/BagHome/BagHome';
import FavoritesHome from '../screens/Favorites/FavoritesHome/FavoritesHome';

// Create a bottom tab navigator for the main app navigation.
const Tab = createBottomTabNavigator<TabParamList>();

// Create native stack navigators for the Home and Profile screens.
const AuthStackNav = createNativeStackNavigator<AuthStackParamList>();
const HomeStackNav = createNativeStackNavigator<HomeStackParamList>();
const ProfileStackNav = createNativeStackNavigator<ProfileStackParamList>();
const ShopStackNav = createNativeStackNavigator<ShopStackParamList>();
const BagStackNav = createNativeStackNavigator<BagStackParamList>();
const FavoriteStackNav = createNativeStackNavigator<FavoritesStackParamList>();

const AuthStack = () => {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="Home" component={Home} />
    </HomeStackNav.Navigator>
  );
};

/**
 * Stack navigator for the Home screen and its details.
 * @component
 * @return {JSX.Element} The Home stack navigator.
 */
const HomeStack = () => {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="Home" component={Home} />
      <HomeStackNav.Screen name="Details" component={Details} />
    </HomeStackNav.Navigator>
  );
};

/**
 * Stack navigator for the Profile screen.
 * @component
 * @return {JSX.Element} The Profile stack navigator.
 */
const ProfileStack = () => {
  return (
    <ProfileStackNav.Navigator screenOptions={{headerShown: false}}>
      <ProfileStackNav.Screen name="Profile" component={Profile} />
    </ProfileStackNav.Navigator>
  );
};

const ShopStack = () => {
  return (
    <ShopStackNav.Navigator screenOptions={{headerShown: false}}>
      <ShopStackNav.Screen name="Shop" component={ShopHome} />
    </ShopStackNav.Navigator>
  );
};

const BagStack = () => {
  return (
    <BagStackNav.Navigator screenOptions={{headerShown: false}}>
      <BagStackNav.Screen name="Bag" component={BagHome} />
    </BagStackNav.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <FavoriteStackNav.Navigator screenOptions={{headerShown: false}}>
      <FavoriteStackNav.Screen name="Favorites" component={FavoritesHome} />
    </FavoriteStackNav.Navigator>
  );
};

/**
 * Renders the bottom icons based on the provided props.
 *
 * @param {object} focused - Determines if the icon is focused
 * @param {string} color - The color of the icon
 * @param {object} route - The route object
 * @return {JSX.Element} The rendered icon component
 */
const renderBottomIcons = ({focused, color, route}: any) => {
  if (route.name === 'homeStack') {
    return focused ? (
      <HomeIcon width={24} height={24} stroke={color} />
    ) : (
      <HomeIcon width={24} height={24} stroke={color} />
    );
  } else if (route.name === 'favoritesStack') {
    return focused ? (
      <FavoritesIcon width={24} height={24} stroke={color} />
    ) : (
      <FavoritesIcon width={24} height={24} stroke={color} />
    );
  } else if (route.name === 'shopStack') {
    return focused ? (
      <ShopIcon width={24} height={24} stroke={color} />
    ) : (
      <ShopIcon width={24} height={24} stroke={color} />
    );
  } else if (route.name === 'bagStack') {
    return focused ? (
      <BagIcon width={24} height={24} stroke={color} />
    ) : (
      <BagIcon width={24} height={24} stroke={color} />
    );
  } else if (route.name === 'profileStack') {
    return focused ? (
      <ProfileIcon width={24} height={24} stroke={color} />
    ) : (
      <ProfileIcon width={24} height={24} stroke={color} />
    );
  }
};

/**
 * Main application navigator containing the bottom tab navigator with Home and Profile stacks.
 * @component
 * @return {JSX.Element} The root navigator of the application.
 */
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        /**
         * Renders the tab bar icon based on the focus, color, and size.
         *
         * @param {boolean} focused - Indicates if the tab is currently focused
         * @param {string} color - The color of the icon
         * @param {number} size - The size of the icon
         * @return {React.ReactNode} The rendered bottom icons based on the focus, color, and route
         */
        tabBarIcon: ({focused, color, size}) => {
          return renderBottomIcons({focused, color, route});
        },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.grays.gray400,
      })}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="shopStack"
        component={ShopStack}
        options={{tabBarLabel: 'Shop'}}
      />
      <Tab.Screen
        name="favoritesStack"
        component={FavoritesHome}
        options={{tabBarLabel: 'Favorites'}}
      />
      <Tab.Screen
        name="bagStack"
        component={BagStack}
        options={{tabBarLabel: 'Bag'}}
      />
      <Tab.Screen
        name="profileStack"
        component={ProfileStack}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackProps, ProfileStackProps, TabParamList} from './Route';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Details from '../screens/Details/Details';

// Create a bottom tab navigator for the main app navigation.
const Tab = createBottomTabNavigator<TabParamList>();

// Create native stack navigators for the Home and Profile screens.
const HomeStackNav = createNativeStackNavigator<HomeStackProps>();
const ProfileStackNav = createNativeStackNavigator<ProfileStackProps>();

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
    <ProfileStackNav.Navigator>
      <ProfileStackNav.Screen name="Profile" component={Profile} />
    </ProfileStackNav.Navigator>
  );
};

/**
 * Main application navigator containing the bottom tab navigator with Home and Profile stacks.
 * @component
 * @return {JSX.Element} The root navigator of the application.
 */
const AppNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="homeStack" component={HomeStack} />
      <Tab.Screen name="profileStack" component={ProfileStack} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;

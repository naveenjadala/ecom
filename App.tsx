/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ThemeProvider} from './src/helper/ThemeProvider';
import SafeAreaViewWrapper from './src/helper/SafeAreaViewWrapper';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
// import {NavigationContainer} from '@react-navigation/native';

/**
 * Main application component that wraps the entire app with theme and safe area view.
 * @component
 * @return {JSX.Element} The root of the application.
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PaperProvider>
        <SafeAreaViewWrapper>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaViewWrapper>
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;

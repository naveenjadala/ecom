import {StyleSheet} from 'react-native';
import {useTheme} from '../helper/ThemeProvider';

const GlobalStyles = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    safeAreaViewContainer: {
      flex: 1,
      minWidth: '100%',
      minHeight: '100%',
      backgroundColor: theme.colors.primary,
    },
    screenContainer: {
      height: '100%',
      width: '100%',
    },
    headerTitle: {},
  });
};

export default GlobalStyles;

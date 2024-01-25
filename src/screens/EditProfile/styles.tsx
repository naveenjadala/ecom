import {StyleSheet, useWindowDimensions} from 'react-native';
import {getFontSize} from '../../assets/fonts/FontSizes';
import {colors} from '../../assets/colors';

export const editProfileStyles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    paddingTop: '5%',
    marginBottom: '3%',
  },
  profileImage: {
    alignItems: 'center',
    padding: 30,
  },
  profileName: {
    textAlign: 'center',
    color: 'black',
    fontSize: getFontSize(20),
  },
  profileElements: {
    flexDirection: 'row',
  },
  profileEvents: {
    backgroundColor: colors.primary,
  },
});

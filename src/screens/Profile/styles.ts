import {StyleSheet} from 'react-native';
import {getFontSize} from '../../assets/fonts/FontSizes';
import {colors} from '../../assets/colors';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    backgroundColor: colors.primary,
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

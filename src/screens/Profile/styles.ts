import {StyleSheet} from 'react-native';
import {getFontSize} from '../../assets/fonts/FontSizes';
import {colors} from '../../assets/colors';

export const profileStyles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: colors.primary,
  },
  container: {
    paddingTop: '5%',
    marginBottom: '3%',
    backgroundColor: colors.primary,
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
    marginTop: 20,
  },
  profileEvents: {
    backgroundColor: colors.primary,
  },
  divider: {
    width: 1,
    height: 40,
    alignSelf: 'center',
  },
});

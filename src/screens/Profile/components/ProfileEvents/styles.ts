import {StyleSheet} from 'react-native';
import {getFontSize} from '../../../../assets/fonts/FontSizes';
import {colors} from '../../../../assets/colors';

export const profileEventsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.text,
    fontSize: getFontSize(16),
    letterSpacing: 0,
    textAlignVertical: 'center',
  },
  subText: {
    fontSize: getFontSize(13),
    color: colors.subtext,
  },
  icon: {
    alignSelf: 'center',
  },
});

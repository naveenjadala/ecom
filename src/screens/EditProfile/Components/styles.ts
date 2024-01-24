import {StyleSheet} from 'react-native';
import {getFontSize} from '../../../assets/fonts/FontSizes';
import {colors} from '../../../assets/colors';

export const EditHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    elevation: 2,
    height: 60,
    alignItems: 'center',
  },
  text: {
    fontSize: getFontSize(16),
    color: colors.text,
  },
});

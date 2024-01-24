import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors';
import {getFontSize} from '../../../../assets/fonts/FontSizes';

export const eventStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: colors.text, fontSize: getFontSize(12), paddingVertical: 10},
});

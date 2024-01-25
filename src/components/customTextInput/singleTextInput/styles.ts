import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const customInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  text: {
    borderColor: colors.grays.gray400,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
  },
});

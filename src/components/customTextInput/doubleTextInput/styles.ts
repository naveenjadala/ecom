import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';

export const customInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  textOne: {
    borderColor: colors.grays.gray400,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 15,
  },
  textTwo: {
    borderColor: colors.grays.gray400,
    borderWidth: 0.5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 15,
  },
});

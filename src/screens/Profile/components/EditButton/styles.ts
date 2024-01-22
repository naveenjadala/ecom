import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors';

export const editButtonStyles = StyleSheet.create({
  container: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grays.gray200,
    padding: 6,
  },
  text: {
    // textAlign: 'center',
  },
});

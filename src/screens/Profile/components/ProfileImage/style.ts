import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors';

export const profileImgStyles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: colors.grays.gray400,
  },
});

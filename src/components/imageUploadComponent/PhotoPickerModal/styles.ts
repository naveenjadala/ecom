import {StyleSheet} from 'react-native';
import {getFontSize} from '../../../assets/fonts/FontSizes';
import {colors} from '../../../assets/colors';

export const photoPickerStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
  },
  subContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: getFontSize(18),
    color: colors.text,
  },
  buttonContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  button: {
    padding: 15,
  },
});

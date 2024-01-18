import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const navigationRef = createNavigationContainerRef();

type RootStackParamList = {
  // Define your screen names and their parameters here
  Home: undefined;
  About: {param1: string; param2: number}; // Example parameters for the 'About' screen
  Details: undefined;
};

export function goBack() {
  return navigationRef?.goBack();
}

// // export function navigate(name: string, params?: object) {
// //   if (navigationRef.isReady()) {
// //     navigationRef.dispatch(CommonActions.navigate(name, params));
// //   }
// // }

// export function navigate(name: string, params?: object) {
//   //   if (navigationRef.isReady()) {
//   CommonActions.navigate(name, params);
//   //   }
// }

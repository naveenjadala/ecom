/**
 * SafeAreaViewWrapper Component
 *
 * A wrapper component that uses SafeAreaView to ensure proper padding
 * and positioning on devices with notches or unusual screen shapes.
 *
 * @component
 *
 * @param {object} props - The properties of the component.
 * @param {ReactNode} props.children - The child components or elements to be wrapped.
 *
 * @example
 * // Usage of SafeAreaViewWrapper in another component:
 * import SafeAreaViewWrapper from '../path/to/SafeAreaViewWrapper';
 *
 * const App = () => {
 *   return (
 *     <SafeAreaViewWrapper>
 *       {/* Your app content goes here *}
 *     </SafeAreaViewWrapper>
 *   );
 * };
 */
import {SafeAreaView} from 'react-native';
import React, {FC, ReactNode} from 'react';

import GlobalStyles from '../assets/GlobalStyles';

// Defining the props for the SafeAreaViewWrapper component
type SafeAreaViewWrapperProps = {
  children: ReactNode;
};

/**
 * SafeAreaViewWrapper Component
 *
 * @param {SafeAreaViewWrapperProps} props - The properties of the component.
 * @param {ReactNode} props.children - The child components or elements to be wrapped.
 * @returns {JSX.Element} The rendered SafeAreaViewWrapper component.
 */
const SafeAreaViewWrapper: FC<SafeAreaViewWrapperProps> = ({children}) => {
  const globalStyles = GlobalStyles();

  return (
    <SafeAreaView style={{...globalStyles.safeAreaViewContainer}}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewWrapper;

import React, {FC, ReactNode} from 'react';
import {render} from '@testing-library/react-native';

import {ThemeProvider} from '../helper/ThemeProvider';
import SafeAreaViewWrapper from '../helper/SafeAreaViewWrapper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

interface AllTheProvidersProps {
  children: ReactNode;
}

/**
 * Renders all the providers.
 *
 * @param {ReactNode} children - The children components to be rendered.
 * @return {ReactElement} The rendered component.
 */
const AllTheProviders: FC<AllTheProvidersProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ThemeProvider>
      <SafeAreaViewWrapper>
        <NavigationContainer>{children}</NavigationContainer>
      </SafeAreaViewWrapper>
    </ThemeProvider>
  );
};

/**
 * Render the UI with custom options.
 *
 * @param {any} ui - The UI to render.
 * @param {object} options - Additional options for rendering.
 * @return {any} The result of rendering.
 */
const customRender = (ui: any, options?: object): any =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};

export const useNavigationMock = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;

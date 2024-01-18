import React, {FC, ReactNode, createContext, useContext, useState} from 'react';
import {darkTheme, lightTheme} from '../assets/theme';

/**
 * ThemeContextProps Interface
 *
 * Defines the properties for the ThemeContext.
 *
 * @interface
 * @property {typeof lightTheme | typeof darkTheme} theme - The current theme object.
 * @property {() => void} toggleTheme - A function to toggle between light and dark themes.
 */
interface ThemeContextProps {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
}

/**
 * ThemeContext
 *
 * The context for managing the application's theme.
 *
 * @constant
 */
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

/**
 * ThemeProviderProps Interface
 *
 * Defines the properties for the ThemeProvider.
 *
 * @interface
 * @property {ReactNode} children - The child components or elements to be wrapped.
 */
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider Component
 *
 * A component that provides a theme context to its descendants.
 *
 * @component
 *
 * @param {ThemeContextProps} props - The properties of the component.
 * @param {ReactNode} props.children - The child components or elements to be wrapped.
 *
 * @example
 * // Usage of ThemeProvider in the main application file:
 * import { ThemeProvider } from '../path/to/ThemeProvider';
 *
 * const App = () => {
 *   return (
 *     <ThemeProvider>
 *       {/* Your app content goes here *}
 *     </ThemeProvider>
 *   );
 * };
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme Hook
 *
 * A hook that provides access to the current theme and theme toggle function.
 *
 * @function
 * @returns {ThemeContextProps} The current theme and theme toggle function.
 *
 * @throws {Error} Throws an error if used outside a ThemeProvider.
 */
export const useTheme = (): ThemeContextProps => {
  // Accessing the theme context
  const context = useContext(ThemeContext);

  // Throwing an error if used outside a ThemeProvider
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

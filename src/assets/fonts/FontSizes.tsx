/**
 * Font Size Module
 *
 * This module provides a utility function for adjusting font sizes based on the device's font scale.
 * It uses the PixelRatio module from the 'react-native' library.
 *
 * @module fontSize
 */

import {PixelRatio} from 'react-native';

// Get the font scale factor from PixelRatio
const fontSize = PixelRatio.getFontScale();

/**
 * Adjust font size based on the device's font scale
 *
 * @param {number} size - Original font size
 * @returns {number} - Adjusted font size
 */
export const getFontSize = (size: number): number => size / fontSize;

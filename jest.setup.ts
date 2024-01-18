import '@testing-library/react-native/extend-expect';
import '@testing-library/jest-native/extend-expect';
import {jest, beforeAll, beforeEach, afterEach, afterAll} from '@jest/globals';

// increasing jest timeout to 10 seconds due to slow ci env
jest.setTimeout(10000);

jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({getInitialState: {then: () => null}}),
  __esModule: true,
}));

beforeAll(() => {});
beforeEach(() => {});
afterEach(() => {});
afterAll(() => {});

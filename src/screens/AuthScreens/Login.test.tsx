import React from 'react';
import {render, screen} from '../../test/test-utils';

import Login from './Login';

describe('Login', () => {
  test('should render Login screen', () => {
    render(<Login />);
    expect(screen).toMatchSnapshot();
  });
});

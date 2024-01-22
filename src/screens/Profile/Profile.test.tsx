import {render, screen} from '../../test/test-utils';
import Profile from './Profile';

describe('Profile', () => {
  test('should render Profile screen snapShort', () => {
    render(<Profile />);
    expect(screen).toMatchSnapshot();
  });
});

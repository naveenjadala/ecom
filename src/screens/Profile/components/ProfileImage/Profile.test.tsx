import {render, screen} from '../../../../test/test-utils';
import ProfileImage from './ProfileImage';

test('should Profile snapshot', () => {
  render(<ProfileImage />);
  expect(screen).toMatchSnapshot();
});
describe('should render Profile Image component', () => {
  test('should render touchable Image', () => {
    render(<ProfileImage />);
    const getClickableImageView = screen.getByRole('button');
    expect(getClickableImageView).toBeTruthy();
  });
});

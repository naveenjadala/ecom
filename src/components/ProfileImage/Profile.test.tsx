import {render, screen} from '../../test/test-utils';
import ProfileImage from './ProfileImage';

test('should Profile snapshot', () => {
  render(
    <ProfileImage
      onClick={function (): void | undefined {
        throw new Error('Function not implemented.');
      }}
    />,
  );
  expect(screen).toMatchSnapshot();
});
describe('should render Profile Image component', () => {
  test('should render touchable Image', () => {
    render(
      <ProfileImage
        onClick={function (): void | undefined {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const getClickableImageView = screen.getByRole('button');
    expect(getClickableImageView).toBeTruthy();
  });
});

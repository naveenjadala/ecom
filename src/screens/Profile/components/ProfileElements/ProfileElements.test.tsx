import {render, screen} from '../../../../test/test-utils';
import ProfileElements from './ProfileElements';

test('should render ProfileEvents snapShort', () => {
  render(
    <ProfileElements
      title="ProfileEvents"
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
  );
  expect(screen).toMatchSnapshot();
});

describe('should render ProfileEvents element', () => {
  test('should render touchable element', () => {
    render(
      <ProfileElements
        title="ProfileEvents"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const getClickableElementView = screen.getByRole('button');
    expect(getClickableElementView).toBeTruthy();
  });

  test('should render text element', () => {
    render(
      <ProfileElements
        title="ProfileEvents"
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    const getTextView = screen.getByText('ProfileEvents');
    expect(getTextView).toBeTruthy();
  });

  //   test('should render text element', () => {
  //     render(<ProfileEvents image="ProfileEvents" />);
  //     const getTextView = screen.getByText('ProfileEvents');
  //     expect(getTextView).toBeTruthy();
  //   });
});

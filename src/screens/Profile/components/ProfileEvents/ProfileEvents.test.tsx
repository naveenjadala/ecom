import {render, screen} from '../../../../test/test-utils';
import ProfileEvents from './ProfileEvents';

test('should render ProfileEvents snapShort', () => {
  render(
    <ProfileEvents
      title={'ProfileEvents'}
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
  );
  expect(screen).toMatchSnapshot();
});

test('should render ProfileEvents element', () => {
  render(
    <ProfileEvents
      title={'ProfileEvents'}
      onClick={function (): void {
        throw new Error('Function not implemented.');
      }}
    />,
  );
  const getClickableElementView = screen.getByRole('button');
  expect(getClickableElementView).toBeTruthy();
});

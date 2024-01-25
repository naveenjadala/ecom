import {useNavigation} from '@react-navigation/native';
import {
  fireEvent,
  render,
  screen,
  useNavigationMock,
  waitFor,
} from '../../test/test-utils';
import EditProfile from './EditProfile';

const mockFn = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockFn,
    goBack: jest.fn(),
  }),
}));

describe.only('should render EditProfile', () => {
  test('should render EditProfile', () => {
    render(<EditProfile />);
    expect(screen).toMatchSnapshot();
  });

  test('should render Header element', () => {
    render(<EditProfile />);
    const getHeader = screen.getByTestId('editProfileHeader');
    expect(getHeader).toBeTruthy();
  });
});

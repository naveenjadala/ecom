import {render, screen} from '../../test/test-utils';
import Home from './Home';
import {HomeStackNavigationProp} from '../../navigation/Route';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(() => ({navigate: jest.fn()})), // Ensure useNavigation returns an object with a navigate property
}));

const nav = useNavigation<HomeStackNavigationProp>();

// Mock the useApiCall hook
jest.mock('../../networking/useApiCall', () => ({
  useApiCall: jest.fn(() => ({
    loading: false,
    error: null,
    data: {
      artObjects: [
        {id: '1', title: 'Art 1'},
        {id: '2', title: 'Art 2'},
      ],
    },
    getApi: jest.fn(),
  })),
}));

describe('Home', () => {
  test('should render Home screen', () => {
    render(<Home navigation={nav.navigation} />);
    expect(screen).toMatchSnapshot();
  });

  test('should render Home screen with data from API', async () => {
    render(<Home navigation={nav.navigation} />);
    expect(screen.getByText('Art 1')).toBeTruthy();
    expect(screen.getByText('Art 2')).toBeTruthy();
  });

  test('should render Home screen with no data from API', async () => {
    (require('../../networking/useApiCall') as any).useApiCall.mockReturnValue({
      loading: false,
      error: null,
      data: {artObjects: []},
      getApi: jest.fn(),
    });
    render(<Home navigation={nav.navigation} />);
    expect(screen.getByText('No data found')).toBeOnTheScreen();
  });
});

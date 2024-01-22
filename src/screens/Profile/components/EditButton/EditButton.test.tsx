import {fireEvent, render, screen, waitFor} from '../../../../test/test-utils';
import EditButton from './EditButton';

const buttonClick = jest.fn();

test('should render EditButton snapShort', () => {
  render(<EditButton onClick={buttonClick} />);
  expect(screen).toMatchSnapshot();
});

describe('should render EditButton', () => {
  test('should render touchable Image', () => {
    render(<EditButton onClick={buttonClick} />);
    const getClickableImageView = screen.getByRole('button');
    expect(getClickableImageView).toBeTruthy();
  });

  test('should fire click event', async () => {
    const buttonClick = jest.fn();
    render(<EditButton onClick={buttonClick} />);
    const getClickableImageView = screen.getByRole('button');
    fireEvent.press(getClickableImageView);
    await waitFor(() => expect(buttonClick).toHaveBeenCalledTimes(1));
  });
});

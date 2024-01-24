import {fireEvent, render, screen} from '../../../test/test-utils';
import EditProfileHeader from './EditProfileHeader';

describe('should render EditProfileHeader', () => {
  test('should render EditProfileHeader', () => {
    render(<EditProfileHeader onCancel={() => {}} onSave={() => {}} />);
    expect(screen).toMatchSnapshot();
  });

  test('should render text element', () => {
    render(<EditProfileHeader onCancel={() => {}} onSave={() => {}} />);
    const getCancelTextView = screen.getByText('Cancel');
    const getSaveTextView = screen.getByText('Save');
    expect(getCancelTextView).toBeTruthy();
    expect(getSaveTextView).toBeTruthy();
  });

  test('should render touchable element cancel', () => {
    const cancel = jest.fn();
    render(<EditProfileHeader onCancel={() => cancel()} onSave={() => {}} />);
    const getClickableElementView = screen.getByText('Cancel');
    fireEvent.press(getClickableElementView);
    expect(cancel).toHaveBeenCalled();
  });

  test('should render touchable element save', () => {
    const save = jest.fn();
    render(<EditProfileHeader onCancel={() => {}} onSave={() => save()} />);
    const getClickableElementView = screen.getByText('Save');
    fireEvent.press(getClickableElementView);
    expect(save).toHaveBeenCalled();
  });
});

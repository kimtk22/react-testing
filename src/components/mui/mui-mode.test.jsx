import { getByRole, screen } from '@testing-library/react';
import MuiMode from './mui-mode';
import { AppProviders } from '../../providers/app-providers';
import { render } from '../../test-util';

describe('Mui mode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />);
    const headingText = screen.getByRole('heading');
    expect(headingText).toHaveTextContent('dark mode');
  });
});

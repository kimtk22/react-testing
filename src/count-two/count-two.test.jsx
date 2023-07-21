import { render, screen } from '@testing-library/react';
import CounterTwo from './count-two';
import user from '@testing-library/user-event';

describe('Counter Two', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);

    const header = screen.getByText('Counter Two');
    expect(header).toBeInTheDocument();

    const count = screen.getByText('0');
    expect(count).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    user.setup();
    const incrementHandle = jest.fn();
    const decrementHandle = jest.fn();

    render(
      <CounterTwo
        count={0}
        incrementHandle={incrementHandle}
        decrementHandle={decrementHandle}
      />,
    );

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandle).toHaveBeenCalledTimes(1);
    expect(decrementHandle).toHaveBeenCalledTimes(1);
  });
});

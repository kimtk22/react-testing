import { render, screen } from '@testing-library/react';
import User from './User';

// src/setupTests.js
import { server } from '../../mocks/server';
import { rest } from 'msw';
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

describe('User', () => {
  test('renders correctly', () => {
    render(<User />);

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<User />);
    const users = await screen.findAllByRole('listitem');

    expect(users).toHaveLength(3);
  });

  test('renders error message', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) =>
        res(ctx.status(500)),
      ),
    );

    render(<User />);

    const error = await screen.findByText('Error fetching users');
    expect(error).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lee Way Toll/i);
  expect(linkElement).toBeInTheDocument();
});

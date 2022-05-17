import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World!/);
  expect(linkElement).toBeInTheDocument();
});

test("adds 1 + 2 to equal 3", () => {
	expect(1+2).toBe(3);
});
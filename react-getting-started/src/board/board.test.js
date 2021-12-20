import { render, screen } from '@testing-library/react';
import Board from '../board/board';

test('renders learn react link', () => {
  render(<Board />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

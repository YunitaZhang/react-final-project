import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders apps link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/lo/i);
  expect(linkElement).toBeInTheDocument();
});

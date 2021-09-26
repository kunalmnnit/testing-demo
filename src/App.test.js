import { render, screen,act, waitFor } from '@testing-library/react';
import React from 'react';
import App from './App';
test('renders Loading', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
test('renders Set button', async ()  => {
  render(<App />);
  await waitFor(() => screen.getByText(/Set/i));
  const buttonElement = screen.getByText(/Set/i);
  expect(buttonElement).toBeInTheDocument();
})

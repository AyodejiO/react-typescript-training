import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('welcomes user when name is submitted', () => {
  const { getByText } = render(<App />);
  const nameInput = getByText(/name:/i);
  expect(nameInput).toBeInTheDocument();

  // enter name
  const input = nameInput.nextSibling as HTMLInputElement;
  input.value = "Makhosi";

  const submitButton = getByText(/submit/i);
  expect(submitButton).toBeInTheDocument();

  submitButton.click();

  const welcomeMessage = getByText(/hi, Makhosi/i);
  expect(welcomeMessage).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import DummyComponent from './DummyComponent';

test('renders dummy component', () => {
  const { getByText } = render(<DummyComponent name="DumDum" age="23" />);
  const nameText = getByText(/I am DumDum/i);
  expect(nameText).toBeInTheDocument();

  const ageText = getByText(/I am 23 years Old/i);
  expect(ageText).toBeInTheDocument();

  const emojiText = getByText(/😀/i);
  expect(emojiText).toBeInTheDocument();
});

test('no name given', () => {
  const { getByText } = render(<DummyComponent name="" age="" />);
  const noName = getByText(/I have no name/i);
  expect(noName).toBeInTheDocument();

  const noAge = getByText(/I don't count the years/i);
  expect(noAge).toBeInTheDocument();
});

test('is sad', () => {
  const { getByText } = render(<DummyComponent name="" age="" isSad={true} />);
  const emoji = getByText(/😔/i);
  expect(emoji).toBeInTheDocument();
});



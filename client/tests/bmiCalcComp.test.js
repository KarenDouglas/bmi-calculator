import React from 'react';
import { render, screen } from '@testing-library/react';
import BmiCalcComponent from '../src/components/BmiCalcComponent';
import App from '../src/App';

test('renders hello world text', async() => {
  render(<App />);
  const element = await screen.getByText('Hello World');
  console.log(element)
  expect(element).toBeInTheDocument();
});

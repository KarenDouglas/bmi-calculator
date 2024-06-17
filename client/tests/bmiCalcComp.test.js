import React from 'react';
import { render, screen } from '@testing-library/react';
import BmiCalcComponent from '../src/components/BmiCalcComponent';

test('renders hello world text', () => {
  render(<BmiCalcComponent />);
  const element = screen.getByRole('heading', {name: 'Hello World'});
  console.log(element.innerHTML)
  expect(element).toBeDefined();
  expect(element.innerHTML).toMatch('Hello World');
});

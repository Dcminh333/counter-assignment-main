import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import { fireEvent } from '@testing-library/react';



// beforeEach(() => {
//   // Render the Counter component here
//   render(<Counter />);

// })

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});


// test('should render initial count with value of 0', () => {
//   // Complete the unit test below based on the objective in the line above
// });

// test('clicking + increments the count', () => {
//   // Complete the unit test below based on the objective in the line above
// });

// test('clicking - decrements the count', () => {
//   // Complete the unit test below based on the objective in the line above
// });

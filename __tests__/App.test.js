import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {App} from '../src/App'

it('Run a text file on Screen', () => {
  render(<App />);
  const textElement = screen.getByText("more")
  expect(textElement).toBeInTheDocument();
});
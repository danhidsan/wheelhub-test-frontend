import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

test('Button render', () => {
  const button = render(<Button label="Test Button" variant="primary" />);
  button.findByText('Test Button');
});

test('Button disabled', () => {
  const button2 = render(<Button label="Test Button 2" variant='primary' disabled/>);
  expect(button2.getByText('Test Button 2')).toHaveClass(
    'button--disabled',
  );
});

test('Button secondary', () => {
  const button3 = render(<Button label="Test Button 3" variant="secondary" />);
  expect(button3.getByText('Test Button 3')).toHaveClass(
    'button--secondary',
  );
});
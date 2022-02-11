import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

import CalculatorUI from '../calculatorComponent/Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CalculatorUI />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return the product of two number when interacting with the UI', () => {
    render(<CalculatorUI />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByTestId('result');
    expect(result.innerHTML).toBe('21');
  });
});

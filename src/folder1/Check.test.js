import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Check from '../Check';

describe('Check Component', () => {
  // Mock the alert function
  const originalAlert = window.alert;
  beforeEach(() => {
    window.alert = jest.fn(); // Mock alert
  });
  afterEach(() => {
    window.alert = originalAlert; // Restore original alert
  });

  test('renders the button correctly', () => {
    render(<Check />);
    const button = screen.getByText(/Alert!!!/i);
    expect(button).toBeInTheDocument(); // Check if button is rendered
  });

  test('alerts on button click', () => {
    render(<Check />);
    const button = screen.getByText(/Alert!!!/i);

    fireEvent.click(button); // Simulate a button click

    expect(window.alert).toHaveBeenCalledWith('testing successful!!'); // Check if alert is called
    expect(window.alert).toHaveBeenCalledTimes(1); // Ensure alert is called once
  });
});

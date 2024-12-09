import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './form';
import { BrowserRouter as Router } from 'react-router-dom';

describe('LoginForm', () => {
  test('renders LoginForm component', () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
  });

  test('validates email correctly', () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.blur(emailInput);

    expect(screen.queryByText(/Invalid email address/i)).toBeNull();
  });

  test('validates password correctly', () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );

    const passwordInput = screen.getByPlaceholderText(/Enter your password/i);
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.blur(passwordInput);

    expect(screen.getByText(/Password must be at least 8 characters long/i)).toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: 'longenoughpassword' } });
    fireEvent.blur(passwordInput);

    expect(screen.queryByText(/Password must be at least 8 characters long/i)).toBeNull();
  })

  test('submits the form with valid data', () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
  
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter your password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });
  
    fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });
  
    fireEvent.click(submitButton);
  
    expect(screen.queryByText(/Invalid email address/i)).toBeNull();
    expect(screen.queryByText(/Password must be at least 8 characters long/i)).toBeNull();
  })
  
})

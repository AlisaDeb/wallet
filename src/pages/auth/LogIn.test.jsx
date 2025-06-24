import '@testing-library/jest-dom';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import authSlice, { loginUser } from '../../redux/slices/authSlice';
import walletSlice from '../../redux/slices/walletSlice';
import { LogIn } from './LogIn';
import { describe, expect, it, vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';

function renderWithStore(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        auth: authSlice,
        wallet: walletSlice,
      },
      preloadedState,
    }),
  } = {}
) {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
}

describe('LogIn Form', () => {
  it('renders input fields and submit button', () => {
    renderWithStore(<LogIn onClose={() => {}} switchToRegister={() => {}} />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /continue/i })
    ).toBeInTheDocument();
  });

  it('email and password fields accept input', async () => {
    renderWithStore(<LogIn onClose={() => {}} switchToRegister={() => {}} />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('dispatches loginUser on submit', () => {
    const store = configureStore({
      reducer: { auth: authSlice, wallet: walletSlice },
    });

    const spy = vi.spyOn(store, 'dispatch');
    renderWithStore(<LogIn onClose={() => {}} switchToRegister={() => {}} />, {
      store,
    });

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(spy).toHaveBeenCalledWith(
      loginUser({ email: 'test@example.com', password: 'password123' })
    );
  });

  it('does not dispatch loginUser when fields are empty', () => {
    const store = configureStore({
      reducer: { auth: authSlice, wallet: walletSlice },
    });

    const spy = vi.spyOn(store, 'dispatch');
    renderWithStore(<LogIn onClose={() => {}} switchToRegister={() => {}} />, {
      store,
    });

    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(spy).not.toHaveBeenCalled();
  });
});

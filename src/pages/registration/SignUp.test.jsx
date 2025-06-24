import '@testing-library/jest-dom';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import authSlice from '../../redux/slices/authSlice';
import { SignUp } from './SignUp';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

function renderWithStore(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        auth: authSlice,
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

describe('SignUp Form', () => {
  it('calls switchToLogin when sign in clicked', async () => {
    const switchToLoginMock = vi.fn();

    renderWithStore(
      <SignUp onClose={() => {}} switchToLogin={switchToLoginMock} />
    );
    await userEvent.click(screen.getByText(/sign in/i));
    expect(switchToLoginMock).toHaveBeenCalled();
  });

  it('displays error from store', () => {
    const errorState = {
      auth: {
        users: [],
        currentUserId: null,
        error: 'Incorrect email or password',
        status: 'idle',
      },
    };

    renderWithStore(<SignUp onClose={() => {}} switchToRegister={() => {}} />, {
      preloadedState: errorState,
    });

    expect(
      screen.getByText(/incorrect email or password/i)
    ).toBeInTheDocument();
  });
});

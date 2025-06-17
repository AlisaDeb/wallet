import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root/Root';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import { LandingPage } from './pages/landing/LandingPage';
import { MainPage } from './pages/main/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: 'dashboard',
        element: <MainPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={3000} />
      </PersistGate>
    </Provider>
  </StrictMode>
);

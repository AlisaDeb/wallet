import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { Root } from './components/Root/Root';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <App /> }],
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

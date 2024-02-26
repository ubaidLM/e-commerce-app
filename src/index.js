import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ClerkProvider publishableKey='pk_test_YWN0dWFsLW1hY2F3LTU2LmNsZXJrLmFjY291bnRzLmRldiQ'>
    <App />
    </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);



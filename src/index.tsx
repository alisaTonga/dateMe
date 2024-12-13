import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Components/ui/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);


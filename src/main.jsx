import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './route/routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className='max-w-screen-2xl	'>
          <RouterProvider router={router} />
        </div>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
)
